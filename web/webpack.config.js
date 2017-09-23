var webpack = require('webpack');
var path = require('path');
var extractTextPlugin = require('extract-text-webpack-plugin');
var cleanWebpackPlugin = require('clean-webpack-plugin');


extractPlugin = new extractTextPlugin({
  filename: 'main.css'
});

module.exports = {
  devtool: 'cheap-eval-soure-map',
  entry: [
    './src/js/app.jsx'
  ],
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            //exclude: /node-modules/,
            options: {
              presets: ['es2015','react']
            }
          }
        ],
        exclude: [
          /node-modules/
        ]
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ['css-loader','sass-loader']
        })
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]

      },
      {
      test: /\.json$/,
      use: [
        {
          loader: 'json-loader'
        }
      ]
  }
]
  },
  plugins: [
    extractPlugin,
    new cleanWebpackPlugin(['dist']),
    new webpack.ProvidePlugin({
       THREE: "three"
         })
  ],
  devServer: {
    port: 8080,
    historyApiFallback: true
  }
};
