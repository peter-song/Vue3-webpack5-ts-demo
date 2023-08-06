const path = require('path');
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
                "@babel/preset-typescript",
                {
                  allExtensions: true,
                }
              ],
            ],
          },
        },
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
  ],
};
