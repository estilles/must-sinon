/*eslint strict:0*/
//'use strict'

var formatMessage = require('./format-message');

function assertMethod(target, name, template) {
  target.prototype[name] = function() {
    var args = Array.prototype.slice.call(arguments);
    var message = formatMessage(template, args);
    this.assert(this.actual[name].apply(this.actual, args), message);
  };
}

module.exports = assertMethod;
