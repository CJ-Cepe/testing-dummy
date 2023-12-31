const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     app: './index.js',
   },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Production',
     }),
   ],
   output: {
     filename: 'index.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', 
                { targets: {
                "browsers": [
                  ">0.25%"
                ]}}
              ]
            ]
          }
        }
      }
    ]
  },
 };