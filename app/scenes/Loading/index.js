import Abstract from '../Abstract'

const Global = require('../../helpers/Global');

class Loading extends Abstract {
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

    //@todo - create button class
    const container = this.add.container(0, 0);
    const button = this.add.image(0, 0, 'buttonRelease');
    const text = this.add.text(0, 0, 'New game',
        {fontFamily: 'troika', fontSize: 25, color: '#cfdad5'})
        .setOrigin(0.5, 0.6)
        .setShadow(2, 2, "#571310", 2, false, true);
    text.fontSize = 24;
    const buttonScaleX = width / (button.displayWidth * 3);
    container.add(button);
    container.add(text);
    container.setScale(buttonScaleX);
    container.setPosition((width / 2) - (button.displayWidth / 3), (height / 2) - (button.displayHeight / 2));
  }

  update() {
  }
}

module.exports = Loading;