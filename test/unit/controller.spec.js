describe("Phone controllers: ", () => {
    let ctrl, service;
    beforeEach(module("app"));
    describe("PhoneListController", () => {
        beforeEach(inject(function ($controller, PhonesService) {
            ctrl = $controller('PhoneListController', {PhonesService});
            service = PhonesService;
        }));
        it('should have the same phone list which in PhoneService', () => {
            chai.expect(ctrl.phonesList).to.equal(service.phones);
        })
    });
    describe("PhoneFormController", () => {
        beforeEach(inject(function ($controller, PhonesService) {
            ctrl = $controller('PhoneFormController', {PhonesService});
            service = PhonesService;
        }));
        it('should add phone with PhonesService.add', () => {
            const stub = sinon.stub(service, 'add').returns(['Sony']);
            const result = ctrl.add("Sony");
            sinon.assert.calledOnce(stub);
            chai.expect(result).length(1)
        });
    });
});