(function() {
    
      "use strict";
    
      angular
        .module('piedFinder', ['ngMaterial'])
        .config(function($mdThemingProvider) {
          $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('orange');
        });
            
    })();
    
    