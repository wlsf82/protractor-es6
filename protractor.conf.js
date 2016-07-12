exports.config = {
  directConnect: true,

  specs: [
    'spec/*_spec.js'
  ],

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {'args': ['--disable-extensions']}
  },

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true
  }
};
