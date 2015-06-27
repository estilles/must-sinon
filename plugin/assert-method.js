/*eslint strict:0*/

var format = require('util').format;
var formatMessage = require('./format-message');

function assertMethod(target, name, template) {
  target.prototype[name] = function method() {
    var args = Array.prototype.slice.call(arguments);
    var matcher = name;
    var message = formatMessage(template, args);

    if (this.__sinonAlways) {
      matcher = format('always%s%s',
        name.charAt(0).toUpperCase(), name.substr(1));
      if (!this.actual.hasOwnProperty(matcher)) {
        message = format('"%s" is not a Sinon matcher', matcher);
        throw new target.AssertionError(message, {
          caller: method.caller
        });
      }
      message = message.replace(/(have)/, 'have always');
    }
    this.assert(this.actual[matcher].apply(this.actual, args), message);
  };
}

module.exports = assertMethod;
