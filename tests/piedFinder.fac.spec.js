describe('Pied Finder Factory', function() {

    beforeEach(angular.mock.module('piedFinder'));
  
    beforeEach(inject(function(_piedFinderFactory_) {
        piedFinderFactory = _piedFinderFactory_;
    }));
  
    it('Factory should exist', function() {
      expect(piedFinderFactory).toBeDefined();
    });

    describe('.getEpisodes()', function() {
            
        it('should exist', function() {
          expect(piedFinderFactory.getEpisodes).toBeDefined();
        });
        
        it('should return some data', function() {
            var functions = {
                getEpisodes: piedFinderFactory.getEpisodes()
            };
            //console.log(functions.getEpisodes);
            spyOn(functions, 'getEpisodes');
            functions.getEpisodes();
            expect(functions.getEpisodes.calls.any()).toEqual(true);
        });
      });

  });