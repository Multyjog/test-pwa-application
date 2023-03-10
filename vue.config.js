module.exports = {
  publicPath: './',

  chainWebpack: config => {
    // Добавляем поддержку coffee script с обработчкой через babel
    config.resolve.extensions.add('.coffee')

    config.module
      .rule('coffee')
      .test(/\.coffee$/)
      .use('babel-loader')
        .loader('babel-loader').end()
      .use('coffee-loader')
        .loader('coffee-loader').end()

  }
};
