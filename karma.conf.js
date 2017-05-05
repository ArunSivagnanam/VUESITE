var webpackConfig = require('./webpack.config');

delete webpackConfig.entry

// karma.conf.js
module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    // this is the entry file for all our tests.
    files: ['vue-client/tests/index.js'],
    // we will pass the entry file to webpack for bundling.
    preprocessors: {
      'vue-client/tests/index.js': ['webpack']
    },
    // use the webpack config
    webpack: webpackConfig,
    // avoid walls of useless text
    webpackMiddleware: {
      noInfo: true
    },
    singleRun: true
  });

}