const path = require('path')
const webpack = require('webpack')

module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: process.env.port || process.env.npm_config_port || 9527,
    open: true,
    overlay: {
      errors: true,
      warnings: false
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src')
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        Vue: ['vue', 'default'],
        THREE: [path.resolve(path.join(__dirname, '/src/assets/js/three.js'))]
      })
    ]
  }
}
