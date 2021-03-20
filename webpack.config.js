const path  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports= {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'dist'), //donde lo va poner
    filename: './main.js',
    assetModuleFilename: 'assets/images/[hash][ext][query]'
  },
  resolve:{
    extensions: ['.js'],
  },
  module:{
    rules:[
      {
        test: /\.js?$/, 
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(jpg|png)$/i,
        type: 'asset/resource'
      }

    ]
  },

  plugins:[
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html',
    }),
    new CopyWebpackPlugin({
      patterns:[
        {
          from: './src/styles',
          to: './'

        }

      ]
    })
  ],
  devServer:{
    port: 3001,
    open: true
  }
}