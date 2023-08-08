# 从零搭建 Vue3 + TypeScript + Eslint + React

[参考链接](https://juejin.cn/post/7256607606465364027)

## 安装包详解

### webpack基础包

- 1、**webpack** webpack核心包
- 2、**webpack-cli** webpack的命令行工具
- 3、**webpack-dev-server** webpack运行开发环境工具

### 打包命令

- 1、**cross-env** 设置环境变量

### 处理js、jsx、ts、tsx

- 1、**@babel/core** Babel 核心模块，负责将代码解析成 AST（抽象语法树），并对
 AST 进行转换和生成新的代码
- 2、**@babel/preset-env** Babel 预设，用于根据目标环境自动确定需要进行的转换和插件，以达到兼容性的目的
- 3、**@babel/preset-typescript** Babel 预设，用于转换 TypeScript 代码为普通的 JavaScript 代码

### 处理样式文件

- 1、**less** less 核心包
- 2、**less-loader** 将 less 转为 css
- 4、**css-loader** 用于解析 css 文件
- 5、**style-loader** 用于将样式注入到 html 的 style 标签中，在开发环境中使用
- 6、**postcss-loader、autoprefixer** 处理 css3 前缀兼容

### 其它插件

- 2、**thread-loader** 开启多线程loader
- 2、**webpack-bundle-analyzer** 添加Webpack包分析工具
- 3、**copy-webpack-plugin** 将已存在的单个文件或整个目录拷贝到构建路径
- 4、**compression-webpack-plugin** 打包时生成gzip文件
- 5、**mini-css-extract-plugin** 将 css 文件提取到单独文件中，生产环境使用
- 6、**css-minimizer-webpack-plugin** 将提取的 css 文件压缩，减小打包体积
- 7、**terser-webpack-plugin** 压缩 js 文件
- 8、**purgecss-webpack-plugin** 清除未使用的 css

### 打包文件 hash 详解

> 项目维护的时候，一般只会修改一部分代码，可以合理配置文件缓存，来提升前端加载页面速度和减少服务器压力，而 **hash** 就是浏览器缓存策略很重要的一部分。*webpack* 打包的 **hash** 分三种：

- hash：跟整个项目的构建有关，主要项目里有文件更改，整个项目构建的 **hash** 值都会更改，并且全部文件都共用相同的 **hash** 值
- chunkhash：不同的入口文件进行依赖文件解析、构建对应的 **chunk**，生成对应的 **hash** 哈希值，文件本身修改或者依赖文件修改，**chunkhash** 值就会变化
- contenthash：每个文件自己单独的 **hash** 值，文件的改动只会影响自身的 **hash** 值
