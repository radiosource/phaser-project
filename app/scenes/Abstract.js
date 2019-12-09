import Phaser from 'phaser'
import withEvents from '../mixins/withEvents'
import attachMixins from '../helpers/attachMixins';

const {constants} = require('../../config/default');

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