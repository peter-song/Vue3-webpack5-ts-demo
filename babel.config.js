module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        'useBuiltIns': 'usage', // 根据配置的浏览器兼容，以及代码中使用到的api进行引入polyfill按需添加
        'corejs': '2.6.5', // 配置使用core-js低版本
      },
    ],
    [
      '@babel/preset-typescript',
      {
        allExtensions: true, // 支持所有文件扩展名
      }
    ],
  ],
}