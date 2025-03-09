exports.config = {
// Runner configuration: Use local runner for test execution
runner: 'local',

// Specify the test files to run
specs: [ './../tests/*.js' ],
// Browser capabilities: Define browsers to test (Edge and Firefox)
capabilities: [
    /* {
        browserName: 'MicrosoftEdge'
    }, */
    {
        browserName: 'firefox'
    }
],

// Logging level for debugging and output
logLevel: 'info',

// Timeout for waiting conditions (e.g., element visibility)
waitforTimeout: 10000,

// Retry settings for network connections
connectionRetryTimeout: 120000,
connectionRetryCount: 3,

// Testing framework: Mocha
framework: 'mocha',

// Reporter for test results: spec reporter for detailed output
reporters: ['spec'],

// Mocha-specific options
mochaOpts: {
    ui: 'bdd',      // Behavior-Driven Development style (describe, it)
    timeout: 60000  // Test timeout set to 60 seconds
},
}