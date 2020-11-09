const { makeWebpackConfig } = require('webpack-simple');

module.exports = makeWebpackConfig({
  output: {
    library: 'test-two',
    libraryTarget: 'umd',
  },
  externals: 'react',
});
