const {constants} = require('../../config/default');

module.exports = {

    applyFade() {
        const createHook = this.create;
        this.create = () => {
            this.cameras.main.fadeIn(constants.FADE_TIME, 0,0,0);
            return createHook.apply(this, ...arguments);
        };
    }

};