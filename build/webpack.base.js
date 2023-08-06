const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src/index.ts'),
  },

  output: {
    filename: 'static/js/[name].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
    publicPath: '/',
  },

  resolve: {
    extensions: ['.vue', '.ts', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /.vue$/,
        use: 'vue-loader',
      },
      {
        test: /.ts$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  'useBuiltIns': 'usage', // 根据配置的浏览器兼容，以及代码中使用到的api进行引入polyfill按需添加
                  'corejs': 3, // 配置使用core-js低版本
                },
              ],
              [
                '@babel/preset-typescript',
                {
                  allExtensions: true,
                }
              ],
            ],
          },
        },
      },
      {
        test: /.(css|less)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../public/index.html'),
      inject: true,
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.BASE_ENV': JSON.stringify(process.env.BASE_ENV),
    }),
  ],
};
