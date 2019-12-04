import Phaser from "phaser";
//возможно нужно его создать в игре, и после этого передать в клас
module.exports = class Global {
  static emmiter = new Phaser.Events.EventEmitter();
};