describe("App module", function () {
    let app;
    before(function () {
        app = angular.module("app")
    });

    it("should be registered", function () {
        chai.expect(app).not.equal(null);
    })
});