chai.should();
describe("PhoneListController", () => {
    beforeEach(module("app"));
    it('should use PhonesService', inject(function ($controller) {
        let callCounter = 0;
        var PhonesService = {
            add: function () {
                callCounter++;
            }
        };
        var ctrl = $controller('PhoneListController', {PhonesService});

        ctrl.add("Sony");
        ctrl.add("Motorolla");
        callCounter.should.be.equal(2);
    }));
});