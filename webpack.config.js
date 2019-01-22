const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: ['./src/index.jsx'],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'build'),
    publicPath: '/'
  },
  module: {
    rules: [
      {test: /(\.js|jsx)$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {publicPath: '../'}
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            },
          },
        ]
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    inline: true
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/assets/index.html'}),
    new MiniCssExtractPlugin({filename: "[name].css", chunkFilename: "[id].css"})
  ]
}