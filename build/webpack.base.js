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

    alias: {
      '@': path.resolve(__dirname, '../src'),
    },

    // 查找第三方模块在本项目的node_modules中查找
    modules: [path.resolve(__dirname, '../node_modules')],
  },

  module: {
    rules: [
      {
        include: [path.resolve(__dirname, '../src')], // 只对项目src文件的vue进行loader解析
        test: /.vue$/,
        use: ['thread-loader', 'vue-loader'],
      },
      {
        include: [path.resolve(__dirname, '../src')], // 只对项目src文件的ts进行loader解析
        test: /.tsx?$/,
        use: ['thread-loader', 'babel-loader'],
      },
      {
        test: /.css$/,
        include: [path.resolve(__dirname, '../src')],
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /.less$/,
        include: [path.resolve(__dirname, '../src')],
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
      {
        test: /.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset', // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          },
        },
        generator: {
          filename: 'static/images/[name][ext]', // 文件输入目录和命名
        },
      },
      {
        test: /.(woff2?|eot|ttf|otf)$/, // 匹配字体图标文件
        type: 'asset', // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          }
        },
        generator: {
          filename: 'static/fonts/[name][ext]', // 文件输出目录和命名
        },
      },
      {
        test: /.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
        type: 'asset', // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          }
        },
        generator: {
          filename: 'static/media/[name][ext]', // 文件输出目录和命名
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

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.BASE_ENV': JSON.stringify(process.env.BASE_ENV),
    }),
  ],

  cache: {
    type: 'filesystem', // 使用文件缓存
  },
};
