/* eslint-disable */
var webpack = require("webpack");

module.exports = {
  entry: {
    'vendor': ['./src/app.js'],
    'page-a': './src/pages/page-a.js'
  },
  output: {
    path: "/public",
    filename: "js/[name].js"
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      { test: /\.html$/, loader: "html?minimize" }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"js/vendor.js")
  ],
  devtool: '#source-map',
  devServer: {
    contentBase: 'public'
  }
}
