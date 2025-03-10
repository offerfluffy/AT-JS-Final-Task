exports.config = {
  runner: "local",
  
  specs: ["../tests/*.js"],

  maxInstances: 2,

  capabilities: [
    {
      browserName: "firefox",
      maxInstances: 1,
    },
    {
      browserName: "MicrosoftEdge",
      maxInstances: 1,
    }
  ],

  logLevel: "info",
  waitforTimeout: 15000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  }
};
