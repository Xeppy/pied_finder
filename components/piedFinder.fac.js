(function() {
    
      "use strict";
    
      angular
        .module('piedFinder')
        .factory('piedFinderFactory', function($http) {
    
          function getEpisodes() {
            return $http.get('http://localhost:3000/episodes')
            .then(function(response) {
                return response.data;
            });
          }
         
         return {
            getEpisodes: getEpisodes
          }
          
        });
        
    })();