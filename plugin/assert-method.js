'use strict';

var format = require('util').format;

function assertMethod(target, name, template) {
  target.prototype[name] = function() {
    var args = Array.prototype.slice.call(arguments);
    var message = format.apply(null, [template].concat(args));
    this.assert(this.actual[name].apply(this.actual, args), message);
  };
}

module.exports = assertMethod;
