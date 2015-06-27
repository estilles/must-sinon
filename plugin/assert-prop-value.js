/*eslint strict:0*/

var format = require('util').format;
var formatMessage = require('./format-message');

function assertPropValue(target, name, template) {
  target.prototype[name] = function method(value) {
    var args = Array.prototype.slice.call(arguments);
    var message = formatMessage(template, args);
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

    this.assert(this.actual[name] === value, message, {expected: value});
  };
}

module.exports = assertPropValue;
