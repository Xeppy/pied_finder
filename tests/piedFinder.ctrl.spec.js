describe('Pied Finder Factory', function() {
    
        beforeEach(angular.mock.module('piedFinder'));
      
        beforeEach(inject(function(_$rootScope_, _$controller_) {
            $controller = _$controller_;
            $rootScope = _$rootScope_;
        }));

        it('Controller should exist', function() {
            var $scope = $rootScope.$new();
            var controller = $controller('piedFinderController', { $scope: $scope });
            expect(controller).toBeDefined();
          });

        it('Quotes should be returned on scope', function(){
            var $scope = $rootScope.$new();
            var controller = $controller('piedFinderController', { $scope: $scope });
            expect($scope.item).not.toBeNull();
            expect($scope.item).toBeDefined();
        });
});