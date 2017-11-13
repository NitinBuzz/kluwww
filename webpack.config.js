const path = require('path');
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'dev') {
  require('dotenv').config({ path: '.env.dev' });
}

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool:
    process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-source-map',

  // 'source-map' :
  //  This is for auto build with webpack-dev-server alternatively I did yarn run build --watch
  plugins: [
    new webpack.DefinePlugin({
      'process.env.apiKey': JSON.stringify(process.env.apiKey),
      'process.env.authDomain': JSON.stringify(process.env.authDomain),
      'process.env.databaseURL': JSON.stringify(process.env.databaseURL),
      'process.env.projectId': JSON.stringify(process.env.projectId),
      'process.env.storageBucket': JSON.stringify(process.env.storageBucket),
      'process.env.messagingSenderId': JSON.stringify(
        process.env.memessagingSenderId
      )
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // limit: 8192
            }
          }
        ]
      },
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }

      // {
      //   test: /\.(png|jpg|gif)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {}
      //     }
      //   ]
      // },
    ]
  }
};
