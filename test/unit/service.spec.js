describe('PhoneService', () => {
    let service;
    beforeEach(module("app.services"));
    beforeEach(inject(PhonesService => {
        service = PhonesService;
    }));
    it('should have 3 initial phones', () => {
        chai.expect(service.phones).length(3);
    });
    it('should add phone models', () => {
        service.add('Sony');
        chai.expect(service.phones).length(4);
    });

    it('should not add phone which already in list', () => {
        service.add(service.phones[0]);
        chai.expect(service.phones).length(3);
    })
});