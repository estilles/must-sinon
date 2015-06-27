/*eslint strict:0*/
//'use strict'

var format = require('util').format;

function assertProp(target, name, message) {
  target.prototype[name] = function method() {
    var alwaysError;
    var matcher;

    if (this.__sinonAlways) {
      matcher = format('always%s%s',
        name.charAt(0).toUpperCase(), name.substr(1));
      alwaysError = format('"%s" is not a Sinon matcher', matcher);
      throw new target.AssertionError(alwaysError, {
        caller: method.caller
      });
    }

    this.assert(this.actual[name], message, {expected: true});
  };
}

module.exports = assertProp;
