describe("PhoneListController", () => {
    let ctrl, service;
    beforeEach(module("app"));
    beforeEach(inject(function ($controller, PhonesService) {
        ctrl = $controller('PhoneListController', {PhonesService});
        service = PhonesService;
    }));
    it('should add phone with PhonesService.add', () => {
        const stub = sinon.stub(service, 'add');
        ctrl.add("Sony");
        sinon.assert.calledOnce(stub);
    });
    it('shoud have the same phone list which in PhoneService', ()=>{
        chai.expect(ctrl.phonesList).to.equal(service.phones);
    })
})
