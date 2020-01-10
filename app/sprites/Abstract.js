import Phaser from "phaser";

const Global = require('../helpers/Global');
const attachMixins = require('../helpers/attachMixins');
const withEvents = require('../mixins/withEvents');

class Abstract extends Phaser.GameObjects.Sprite {
  static asset;
  static quantity = 0;
  id;

  constructor() {
    super();
    const Class = require(`./${this.constructor.name}`);
    Class.quantity++;
    this._bindEventsHandlers();
    //this.id = Class.quantity;
  }

  postSetup() {
    this._createAliases();
    this._makePropertiesReadonly();
    this._bindEventsHandlers();
  }


  _createAliases() {
    this.data = this.Sprite.data
  }

  _makePropertiesReadonly() {
    for (let prop of ['id', '_on']) {
      Object.defineProperty(this, prop, {__proto__: null, configurable: false, enumerable: true, writable: false});
    }
  }

}

module.exports = attachMixins(Abstract, withEvents);
