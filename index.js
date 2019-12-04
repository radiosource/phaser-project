import Game from './app/Game';

window.game = new Game();

if (window.cordova) {
  const app = {
    initialize: function () {
      document.addEventListener(
          'deviceready',
          this.onDeviceReady.bind(this),
          false
      )
    },

    // deviceready Event Handler
    //
    onDeviceReady: function () {
      this.receivedEvent('deviceready')

      // When the device is ready, start Phaser Boot scene.
      //window.game.scene.start('Boot')
    },

    receivedEvent: function (id) {
      console.log('Received Event: ' + id)
    }
  };

  app.initialize()
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration)
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError)
    })
  })
}