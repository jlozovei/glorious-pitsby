const fs = require('fs'),
  webpack = require('webpack'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  project = require('./project.json');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: project.scripts.dist.filename.dev
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: project.styles.dist.filename.dev
    })
  ]
}
