const Global = require('../helpers/Global');
const Events = require('../helpers/Events');

module.exports = {

  emmit() {
    Global.emmiter.emit(...arguments)
  },

  on(event, fn) {
    if (!Events[event]) console.warn(`Event: "${event}" is not register!`);
    fn instanceof Function
        ? Global.emmiter.on(...arguments)
        : Global.emmiter.on(event, this._on[event])
    ;
  },

  off(event, fn, context, once) {
    if (!Events[event]) console.warn(`Event: "${event}" is not register!`);
    fn instanceof Function
        ? Global.emmiter.off(...arguments)
        : Global.emmiter.on(event, this._on[event])
    ;
  },

  _bindEventsHandlers() {
    if (this._on instanceof Object) {
      Object.keys(this._on).forEach(fn => this._on[fn] = this._on[fn].bind(this));
    }
  }

};
