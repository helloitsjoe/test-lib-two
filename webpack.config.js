const { makeWebpackConfig } = require('webpack-simple');

const config = makeWebpackConfig();

config.output = {
  library: 'test-two',
  libraryTarget: 'amd',
};
config.mode = 'development';
// config.externals = 'react';

module.exports = config;
