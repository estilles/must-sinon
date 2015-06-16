'use strict';

var defineGetter = require('oolong').defineGetter;

function definePassthrough(Must, name) {
  defineGetter(Must.prototype, name, function() {
    return this;
  });
}

module.exports = definePassthrough;
