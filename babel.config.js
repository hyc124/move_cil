module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  //vant引入配置
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true,
      // style: name => `${name}/style/less`
    }, 'vant']
  ]
}
