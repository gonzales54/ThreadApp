const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: '../public/app',
  publicPath: '/app',
  pages: {
    app: {
      title: 'Thread App',
      entry: 'src/main.ts',
      template: 'templates/base.html',
      filename: `../../resources/views/spa/app.blade.php`,
    },
  },
})
