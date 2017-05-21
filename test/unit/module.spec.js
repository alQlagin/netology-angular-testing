describe("App module", function () {
    let module;
    before(function () {
        module = angular.module("app")
    });

    it("should be registered", function () {
        chai.expect(module).not.equal(null);
    })
});