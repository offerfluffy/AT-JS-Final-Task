exports.config = {
  runner: "local",
  specs: ["../tests/*.js"],
  capabilities: [
    { browserName: "firefox", }
    // { browserName: "MicrosoftEdge" }, // Uncomment if you want to test Edge
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