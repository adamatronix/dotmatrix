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
  },
  module: {
    rules: [   
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
            }
        },
        {
          test: /\.scss$/,
          use: [{
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }]
        }
    ]
  }
}