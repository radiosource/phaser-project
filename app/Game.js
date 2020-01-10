import Phaser from 'phaser'
import config from './config'
import withEvents from "./mixins/withEvents";
import attachMixins from "./helpers/attachMixins";
import Global from "./helpers/Global";
import scenes from "./scenes/"


class Game extends Phaser.Game {
  constructor() {
    const docElement = document.documentElement;
    super(config);
    //this.scene.add('Menu');
    //with Cordova with need to wait that the device is ready so we will call the Boot scene in another file
    Global.game = this;
    console.log(Global.game)
    if (!window.cordova) {
      this.scene.start(scenes.Menu.constructor.name);
    }
  }
}

module.exports = attachMixins(Game, withEvents);

