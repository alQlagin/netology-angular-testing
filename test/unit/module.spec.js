describe("App module", function () {
    let module;
    before(function () {
        module = angular.module("app")
    });

    it("should be registered", function () {
        chai.expect(module).not.equal(null);
    });

    describe("dependencies", function(){
        it("should include app.controllers", function(){
            chai.expect(module.requires).to.include('app.controllers');
        })
    })
});