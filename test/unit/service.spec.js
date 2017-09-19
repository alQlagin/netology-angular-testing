describe('PhoneService', function () {
    let service;
    beforeEach(module("app.services"));
    beforeEach(inject(function (PhonesService) {
        service = PhonesService;
    }));
    it('should have 3 initial phones', function () {
        chai.expect(service.phones).length(3);
    });
    it('should add phone models', function () {
        service.add('Sony');
        chai.expect(service.phones).length(4);
    });

    it('should not add phone which already in list', function () {
        service.add(service.phones[0]);
        chai.expect(service.phones).length(3);
    })
});