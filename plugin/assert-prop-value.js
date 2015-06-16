/*eslint strict:0*/
//'use strict'

var formatMessage = require('./format-message');

function assertPropValue(target, name, template) {
  target.prototype[name] = function(value) {
    var args = Array.prototype.slice.call(arguments);
    var message = formatMessage(template, args);
    this.assert(this.actual[name] === value, message, {expected: value});
  };
}

module.exports = assertPropValue;
