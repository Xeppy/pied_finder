(function() {
    
      "use strict";
    
      angular
        .module('piedFinder')
        .controller('piedFinderController', function($scope, $mdSidenav, $mdDialog, piedFinderFactory) {
          piedFinderFactory.getEpisodes().then(function(data) {
            $scope.episodes = data;
            $scope.seasons = getSeasons($scope.episodes);
          });

        //Just a fun little feature that randomly picks an Erlich quote on refresh and displays it...
        //Usually would be put in its own file and reffered to here.
          var items = [
              "God dammit Jian-Yang!", 
              "Our whole corporate culture is that we don't have a corporate culture.", 
              "We'll call you when we want pleated khakis", 
              "Look, if we're gonna die, let's just die. Why do we have to take Anton with us?", 
              "Think of it more as, um, forced adoption through aggressive guerrilla marketing.", 
              "Don't you need a visa to go to China? Yes. I can call my uncle in Beijing. He's very corrupt.", 
              "That whole spaces-tab thing was...illustrative of our vast differences.", 
              "Here he comes, Richard Hendricks, the Monet of compressionism.", 
              "In the fable, Pied Piper led all the children into darkness, but now we're doing it."
            ];
          $scope.item = items[Math.floor(Math.random()*items.length)];
    
        });
        
        function getSeasons(episodes) {
    
            var seasons = [''];
    
            angular.forEach(episodes, function(episode) {
              angular.forEach(episode, function(data) {
                seasons.push(episode.season);
              });
            });
            return _.uniq(seasons);
          }
    
    })();