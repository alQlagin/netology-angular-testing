class SuperCalculatorPage {
    get url() {
        return 'http://juliemr.github.io/protractor-demo/'
    }

    get FirstNumber() {
        return element(by.model('first'))
    }

    get SecondNumber() {
        return element(by.model('second'))
    }

    get GoButton() {
        return element(by.id('gobutton'))
    }

    get LatestCalculationResult() {
        return element(by.binding('latest'));
    }

    setFirstNumber(number) {
        this.FirstNumber.sendKeys(number);
    }

    setSecondNumber(number) {
        this.SecondNumber.sendKeys(number);
    }

    selectSubstractAction() {
        const operator = element(by.model('operator'));
        operator.$('[value="SUBTRACTION"]').click();
    }

    go() {
        this.GoButton.click();
    }

    getLatestResult() {
        return this.LatestCalculationResult.getText();
    }

    get() {
        browser.get(this.url);
    }

}
module.exports = SuperCalculatorPage;
