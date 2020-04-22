const path = require('path')

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: './lib'
  },
  output: {
    filename: 'dot-matrix.js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'var',
    library: 'dotMatrix'
  }
}