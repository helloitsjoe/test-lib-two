const { makeWebpackConfig } = require('webpack-simple');

const config = makeWebpackConfig();

config.output = {
  library: 'test-two',
  libraryTarget: 'amd',
};
config.externals = 'react';

module.exports = config;
