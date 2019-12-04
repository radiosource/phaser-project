import Phaser from 'phaser'
import Events from './helpers/Events'
import Global from './helpers/Global'
import config from './config'
import withEvents from "./mixins/withEvents";
import attachMixins from "./helpers/attachMixins";



class Game extends Phaser.Game {
  constructor() {
    const docElement = document.documentElement;
    super(config);
    //with Cordova with need to wait that the device is ready so we will call the Boot scene in another file
    if (!window.cordova) {
      this.scene.start('Boot')
    }
  }
}

module.exports = attachMixins(Game, withEvents);

