const path = require('path');
const { merge } = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');

const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
  mode: 'production',

  devtool: 'source-map',

  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
          to: path.resolve(__dirname, '../dist'),
          // filter: source => {
          //   return !source.includes('index.html');
          // },
          globOptions: { 
            ignore: ['**/index.html'], // 忽略html文件不进行复制
          },
        },
      ],
    }),
  ],
});
