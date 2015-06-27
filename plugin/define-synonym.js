'use strict';

var defineGetter = require('oolong').defineGetter;
var lookupGetter = require('oolong').lookupGetter;

function defineSynonym(Must, name, synonym) {
  defineGetter(Must.prototype, name, lookupGetter(Must.prototype, synonym));
}

module.exports = defineSynonym;
