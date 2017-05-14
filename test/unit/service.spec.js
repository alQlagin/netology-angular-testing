chai.should();

describe('PhoneService', () => {
    beforeEach(module("app"));

    it('should have PhonesService', inject(function (PhonesService) {
        PhonesService.should.not.be.null;
    }));

    it('should have 3 initial phones', inject(function (PhonesService) {
        PhonesService.should.have.property('phones').which.length(3);
    }))

    it('should add phone models', inject(function (PhonesService) {
        PhonesService.add('Sony')
        PhonesService.should.have.property('phones').which.length(4);
    }))


    it('should not add phone models which already in list', inject(function (PhonesService) {
        PhonesService.add(PhonesService.phones[0]);
        PhonesService.should.have.property('phones').which.length(3);
    }))
})