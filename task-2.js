exports.inviteUser = function(req, res) {
    var invitationBody = req.body;
    var shopId = req.params.shopId;
    var authUrl = "https://url.to.auth.system.com/invitation";
    //Could be affected by the same origin policy, might need to be defined in the headers by using .set() 
    superagent
    .post(authUrl)
        .send(invitationBody)
            .end(function(err, invitationResponse) {
                /*
                The whole logic gets embedded at the point the request is sent off which means
                that not much of it can be re-used in case you want to update the User model
                using another method or add users to shops without an invitation link. This could be broken out
                into functions which could be called in place of the verbatim snippets seen below.
                */
                if (invitationResponse.status === 201) {
                    User.findOneAndUpdate({
                    authId: invitationResponse.body.authId
                    }, {
                    authId: invitationResponse.body.authId,
                    email: invitationBody.email
                    }, {
                    upsert: true, //Adds the document if it couldn't find a match using the filter
                    new: true
                    }, function(err, createdUser) {
                    Shop.findById(shopId).exec(function(err, shop) {
                    if (err || !shop) {
                    /*Printing errors as-is could allow for potentially sensitive information to be exposed
                    to the end user and should be avoided as much as possible*/    
                    return res.status(500).send(err || { message: 'No shop found' });
                    }
                    /*This next if statement is a bad way to evaluate whether a string is contained
                    within the other. The IndexOf method returns -1 if it's not found which evaluates to true.
                    In fact, this always evaluates to true EXCEPT for when it is found at the start of the string
                    in which case it will return 0 and will not run.
                    This could very well have been the intended behaviour but it doesn't make it clear
                    for others who are unfamiliar with the code or the form of the string which is being evaluated.
                    explicitely stating the index you expect or using .includes() would make this a lot easier to understand as well 
                    avoid unwanted problems with string displacement etc.*/
                    if (shop.invitations.indexOf(invitationResponse.body.invitationId)) {
                    shop.invitations.push(invitationResponse.body.invitationId);
                    }
                    if (shop.users.indexOf(createdUser._id) === -1) {
                    shop.users.push(createdUser);
                    }
                    shop.save();
                    });
                    });
                //Scarce error handling, need to handle all the exception cases using else{}.
                } else if (invitationResponse.status === 200) {
                    res.status(400).json({
                    error: true,
                    message: 'User already invited to this shop'
                    });
                    return;
                }
                res.json(invitationResponse);
            });
};