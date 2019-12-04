/**
 * Assign all mixins properties to baseClass prototype
 * @param baseClass
 * @param mixins
 * @returns {*}
 */
module.exports = (baseClass, ...mixins) => {
  mixins.forEach(mixin => Object.keys(mixin).forEach(key => {
    if (key in baseClass) {
      throw Error(`Class "${baseClass.constructor.name}" already have property "${key}"`);
    }
    baseClass.prototype[key] = mixin[key]
  }));
  return baseClass;
};