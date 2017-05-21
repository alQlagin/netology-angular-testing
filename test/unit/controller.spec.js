chai.should();
describe("PhoneListController", () => {
    let ctrl;
    let stub;
    beforeEach(module("app"));
    beforeEach(inject(function ($controller, PhonesService) {
        ctrl = $controller('PhoneListController', {PhonesService});
        stub = sinon.stub(PhonesService, 'add')
    }));
    it('should use PhonesService', inject(function ($controller, PhonesService) {
        ctrl.add("Sony");
        sinon.assert.calledOnce(stub)
    }));
});