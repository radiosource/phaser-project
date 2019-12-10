const {constants} = require('../../config/default');

module.exports = {

    applyFade() {
        const createHook = this.create;
        this.create = () => {
            this.cameras.main.fadeIn(constants.FADE_TIME, ...constants.FADE_COLORS);
            return createHook.apply(this, ...arguments);
        };
    }

};
