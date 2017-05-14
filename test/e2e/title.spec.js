var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();
const expect = chai.expect;
describe("Index page title", () => {
    it("should be equal Angular is awesome", function (done) {
        browser.get("/");
        expect(browser.getTitle()).eventually.be.equal("Angular is awesome");
        done();
    })
})