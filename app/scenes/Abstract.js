import Phaser from 'phaser'
import withEvents from '../mixins/withEvents'
import attachMixins from '../helpers/attachMixins';

const {constants} = require('../../config/default');

class Abstract extends Phaser.Scene {

    constructor() {
        super();
        this._bindEventsHandlers();
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
