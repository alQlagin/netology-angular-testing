const expect = require('chai').expect;
describe('When sum two numbers', function() {
    describe('super calculator should', function() {
        var firstNumber = element(by.model('first'));
        var secondNumber = element(by.model('second'));
        var goButton = element(by.id('gobutton'));
        var sum = element(by.binding('latest'));
        var superCalculatorUrl = 'http://juliemr.github.io/protractor-demo/';

        it('return sum of any two-digit numbers', function() {
            browser.get(superCalculatorUrl);
            firstNumber.sendKeys(11);
            secondNumber.sendKeys(22);

            goButton.click();

            expect(sum.getText()).eventually.to.equal((11 + 22).toString());
        });

        it('return sum of any three-digit numbers', function() {
            browser.get(superCalculatorUrl);
            firstNumber.sendKeys(100);
            secondNumber.sendKeys(200);

            goButton.click();

            expect(sum.getText()).eventually.to.equal(100 + 200 + '');
        });

        function sumNumbers(first, second) {
            firstNumber.sendKeys(first);
            secondNumber.sendKeys(second);
            goButton.click();
        }

        it('save latest calculation results into history', function() {
            browser.get(superCalculatorUrl);
            sumNumbers(1, 2);
            sumNumbers(2, 3);

            var calculationHistory = element.all(by.repeater('result in memory'));
            expect(calculationHistory.count()).eventually.to.equal(2);
        });

        it('show history of calculation results in reverse order (latest first) ', function() {
            browser.get(superCalculatorUrl);
            sumNumbers(1, 0);
            sumNumbers(2, 0);

            var calculationHistory = element.all(by.repeater('result in memory'));
            expect(calculationHistory.first().getText()).eventually.to.contain('2');
            expect(calculationHistory.last().getText()).eventually.to.contain('1');
        });
    });
});
