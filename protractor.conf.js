module.exports.config = {
    allScriptsTimeout: 11000,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        'test/e2e/**/*spec.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:8000/',
    framework: 'mocha',
    mochaOpts: {
        reporter: "spec",
        slow: 10000,
        timeout: 10000,
    }
};