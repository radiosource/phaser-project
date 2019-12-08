import Abstract from '../Abstract'
import Button from '../Button'

const Global = require('../../helpers/Global');

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
    const {width, height} = Global.game.config;
    const background = this.add.image(0, 0, 'background').setOrigin(0, 0);
    const backgroundScaleX = width / background.displayWidth;
    const backgroundScaleY = height / background.displayHeight;
    background.setScale(backgroundScaleX, backgroundScaleY);

    this._addButton({name: "startButton", scene: this, x: 0, y: 0, text: 'New game'});
  }

  update() {
  }

  _addButton(buttonOptions) {
    this.buttons[buttonOptions.name] = new Button(buttonOptions);
  }
}

module.exports = Loading;