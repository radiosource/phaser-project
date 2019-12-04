const Global = require('../helpers/Global');
const Events = require('../helpers/Events');

module.exports = {

  on(event, fn) {
    if (!Events[event]) console.warn(`Event: "${event}" is not register!`)
    fn instanceof Function
        ? Global.emitter.on(...arguments)
        : Global.emitter.on(event, this._on[event])
    ;
  },

  off(event, fn, context, once) {
    if (!Events[event]) console.warn(`Event: "${event}" is not register!`);
    fn instanceof Function
        ? Global.emitter.off(...arguments)
        : Global.emitter.on(event, this._on[event])
    ;
  },

  _bindEventsHandlers() {
    if (this._on instanceof Object) {
      Object.keys(this._on).forEach(fn => this._on[fn] = this._on[fn].bind(this));
    }
  }

};