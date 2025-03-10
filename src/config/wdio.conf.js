exports.config = {
  runner: "local",

  specs: ["../tests/*.js"],

  maxInstances: 4,

  capabilities: [
    {
      browserName: "firefox",
      maxInstances: 2,
    },
    {
      browserName: "MicrosoftEdge",
      maxInstances: 2,
    },
  ],

  logLevel: "info",
  waitforTimeout: 5000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
