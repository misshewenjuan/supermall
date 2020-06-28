module.exports = {
  configureWebpack: {
    resolve: {
      //配置可以省略后缀的文件
      // extensions:[]
      // 配置别名：
      alias: {
        // '@': 'src'这个是已经配置好的
        'assets': '@/assets',
        'common': '@/commmon',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}