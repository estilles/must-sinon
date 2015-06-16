'use strict';

var oo = require('oolong');
var defineGetter = oo.defineGetter;

function definePassthrough(Must, name) {
  defineGetter(Must.prototype, name, function() {
    return this;
  });
}

module.exports = definePassthrough;
