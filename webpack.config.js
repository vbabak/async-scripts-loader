const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'async-scripts-loader.js',
    library: "loadScriptAsync",
    libraryTarget: 'umd',
  },
};
