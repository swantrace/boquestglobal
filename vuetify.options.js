const LRU = require('lru-cache')
const themeCache = new LRU({
  max: 10,
  maxAge: 1000 * 60 * 60 // 1 hour
})
export default {
  breakpoint: {},
  icons: {
    iconfont: 'mdi' // default - only for display purposes
  },
  lang: {},
  rtl: false,
  theme: {
    themes: {
      light: {
        primary: '#000',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
        anchor: '#8c9eff',
        info: '#2196F3',
        success: '#4CAF50'
      }
    },
    minifyTheme: function(css) {
      return process.env.NODE_ENV === 'production'
        ? css.replace(/[\r\n|\r|\n]/g, '')
        : css
    },
    customProperties: true,
    themeCache
  }
}
