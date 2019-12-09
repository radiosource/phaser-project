import Abstract from '../Abstract'
import Button from '../Button'

const Global = require('../../helpers/Global');
const {constants} = require('../../../config/default');

class Loading extends Abstract {
  buttons = {};

  constructor() {
    super({key: "Loading"});
  }

  init() {
  }

  preload() {
    this.load.setPath('../../assets/');
    this.load.image('background', 'backgrounds/6.jpg');
    this.load.image('buttonRelease', 'ui/buttons/buttonRelease.png');
    this.load.image('buttonPressed', 'ui/buttons/buttonPressed.png');
  }

  create() {
    console.log("====")
    //todo move to mixin
    this.cameras.main.fadeIn(constants.FADE_TIME, 255,255,255);

    // console.log(this.scene)
    // console.log(this.scene.camera)
    const {width, height} = Global.game.config;
    const background = this.add.image(0, 0, 'background').setOrigin(0, 0);
    const backgroundScaleX = width / background.displayWidth;
    const backgroundScaleY = height / background.displayHeight;
    background.setScale(backgroundScaleX, backgroundScaleY);

    this._addButton({name: "startButton", x: 0, y: 0, text: 'New game'});
  }

  update() {
  }

  _addButton(buttonOptions) {
    this.buttons[buttonOptions.name] = new Button({...buttonOptions,scene: this});
  }
}

module.exports = Loading;