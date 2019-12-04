import idiom from 'idiom.js'

const lang = idiom({
  'default': {
    'welcome': 'Welcome to Phaser + ES6 + Webpack!'
  },
  'ru-RU': {
    'welcome': 'Ну привет, кожаный мешок!'
  }
});

export default lang(window.navigator.language)
