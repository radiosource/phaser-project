import Phaser from "phaser";
import withEvents from "../mixins/withEvents";
import attachMixins from "../helpers/attachMixins";

const {constants} = require('../../config/default');
const Global = require('../helpers/Global');

class Button extends Phaser.GameObjects.Container {
  scene;
  name;
  image;
  text;

  constructor({scene, name, x, y, text}) {
    super(scene, x, y);
    this.scene = scene;
    this.name = name;
    const {width, height} = Global.game.config;
    this.text = scene.add.text(0, 0, text,
        {fontFamily: 'troika', fontSize: 25, color: '#cfdad5'})
        .setOrigin(0.5, 0.6)
        .setShadow(2, 2, "#571310", 2, false, true);
    this.text.fontSize = 24;


    this.image = scene.add.image(this.x, this.y, 'buttonRelease').setInteractive();
    this.add(this.image);

    this.pressedImage = this.scene.add.image(this.x, this.y, 'buttonPressed');
    this.pressedImage.visible = false;
    this.add(this.pressedImage);

    this.add(this.text);
    const buttonScaleX = width / (this.image.displayWidth * 3);
    this.setScale(buttonScaleX);
    this.setPosition((width / 2) - (this.image.displayWidth / 3), (height / 2) - (this.image.displayHeight / 2));
    this._addClickEvent();
    scene.add.existing(this);
  }

  _addClickEvent() {
    this.image.once('pointerup', () => {
      this.image.visible = false;
      this.pressedImage.visible = true;
      //@todo emit change scene event

      this.scene.cameras.main.once('camerafadeoutcomplete', function (camera) {
        console.log("11111")
      }, this.scene);

      //@todo move to scene
      setTimeout(()=>{
        this.scene.cameras.main.fadeOut(constants.FADE_TIME, ...constants.FADE_COLORS);
      },100)

    }, this.scene);
  }

}

module.exports = attachMixins(Button, withEvents);
