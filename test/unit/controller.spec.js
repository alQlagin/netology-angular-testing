describe("Phone controllers: ", function () {
    let ctrl, service;
    beforeEach(module("app"));
    describe("PhoneController", function () {
        beforeEach(inject(function ($controller, PhonesService) {
            ctrl = $controller('PhoneController', {PhonesService: PhonesService});
            service = PhonesService;
        }));
        it('should have the same phone list which in PhoneService', function () {
            chai.expect(ctrl.phonesList).to.equal(service.phones);
        });

        it('should add phone with PhonesService.add', function () {
            const stub = sinon.stub(service, 'add').returns(['Sony']);
            const result = ctrl.add("Sony");
            sinon.assert.calledOnce(stub);
            chai.expect(result).length(1)
        });
    });
});