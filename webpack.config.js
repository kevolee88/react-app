var path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: SRC_DIR + '/app/index.js',
  output: {
    filename: 'bundle.js',
    path: DIST_DIR + '/app',
    publicPath: '/app/'
  },
  module: {
    loaders: [{
      test:    /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader:  'babel-loader',
      query:   {
        presets: ['es2015', 'react'],
      }
    }]
  }
}
