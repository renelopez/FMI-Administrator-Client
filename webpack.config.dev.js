import path from 'path';

module.exports = {
  debug:true,
  devtool:'inline-source-map',
  noInfo:true,

  entry:[
     path.resolve(__dirname,'src/index')
  ],

  output:{
    path:path.resolve(__dirname,'src'),
    publicPath:'/',
    filename:'bundle.js'
  },

  plugins:[],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
