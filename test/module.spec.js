chai.should();
describe("App module", function () {
    let app;
    before(function () {
        app = angular.module("app")
    });

    it("should be registered", function () {
        app.should.not.to.be.equal(null);
    })
});