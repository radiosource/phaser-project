import Abstract from '../Abstract'
import Button from '../Button'
import withFadeIn from '../../mixins/withFadeIn'
import attachMixins from '../../helpers/attachMixins';

const Global = require('../../helpers/Global');
const {constants} = require('../../../config/default');

class Menu extends Abstract {
  buttons = {};

  constructor() {
    super({key: "Menu"});
    this.applyFade();
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

    this._addButton({name: "startButton", x: 0, y: 0, text: 'New game'});

    this.on(Button.CLICK_MSG, (data) => {
      console.log(`debug## index.js::37`);
      console.log(Button.CLICK_MSG)
      console.log(data)
    })
  }

  update() {
  }

  _addButton(buttonOptions) {
    this.buttons[buttonOptions.name] = new Button({...buttonOptions, scene: this});
  }
}

module.exports = attachMixins(Menu, withFadeIn);
