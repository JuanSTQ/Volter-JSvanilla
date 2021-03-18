const path  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports= {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'dist'), //donde lo va poner
    filename: 'main.js'
  },
  resolve:{
    extensions: ['js'],
  },
  module:{
    rules:[
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin([{
      inject: true,
      template: './public/index.html',
      filename: './index.html',
    }]),
  ],
  devServer:{
    port: 3001,
    open: true
  }
}