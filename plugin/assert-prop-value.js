'use strict';

var format = require('util').format;

function assertPropValue(target, name, template) {
  target.prototype[name] = function(value) {
    var args = Array.prototype.slice.call(arguments);
    var message = format.apply(null, [template].concat(args));
    this.assert(this.actual[name] === value, message);
  };
}

module.exports = assertPropValue;
