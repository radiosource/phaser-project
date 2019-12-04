import Phaser from 'phaser'
import withEvents from '../mixins/withEvents'
import attachMixins from '../helpers/attachMixins';

class Abstract extends Phaser.Scene {

  constructor() {
    super();
  }

  init() {

  }

  preload() {
  }

  create() {

  }

  update() {
  }
}

module.exports = attachMixins(Abstract, withEvents);