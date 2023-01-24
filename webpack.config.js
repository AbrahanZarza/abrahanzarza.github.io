const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: 'index_bundle.js',
  },
  target: 'web',
  devServer: {
    port: '3000',
    static: {
      directory: path.join(__dirname, 'public')
    },
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: 'babel-loader', 
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          }, 
          {
            loader: "css-loader" 
          }, 
          {
            loader: "sass-loader"
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    }),
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: "public/assets", 
          to: "assets" 
        },
        {
          from: "public/404.html",
          to: "404.html"
        }
      ],
    }),
  ]
};