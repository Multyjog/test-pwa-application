module.exports = {
  publicPath: "./",
  // publicPath: process.env.NODE_ENV === "production" ? "/test-pwa-application" : "./",
  pwa: {
    manifestPath: 'https://raw.githubusercontent.com/Multyjog/test-pwa-application/main/manifest.json'
  },

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
