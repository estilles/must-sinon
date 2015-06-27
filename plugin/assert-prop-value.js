/*eslint strict:0*/

var formatMessage = require('./format-message');
var errorOnAlways = require('./error-on-always');

function assertPropValue(target, name, template) {
  target.prototype[name] = function method(value) {
    var args = Array.prototype.slice.call(arguments);
    var message = formatMessage(template, args);

    errorOnAlways(target, this, name, method);
    this.assert(this.actual[name] === value, message, {expected: value});
  };
}

module.exports = assertPropValue;
