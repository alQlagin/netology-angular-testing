describe("Controllers", () => {
    beforeEach(module("app"));
    it('should create a `phones` model with 3 phones', inject(function($controller) {
        var scope = {};
        var ctrl = $controller('PhoneListController', {$scope: scope});

        ctrl.should.have.property('phones').which.length(3);
    }));
});