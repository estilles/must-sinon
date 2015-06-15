'use strict';

var kindof = require('kindof');

exports.isSpy = function isSpy(fn) {
  return kindof(fn) === 'function' && fn.displayName === 'spy';
};

exports.isStub = function isStub(fn) {
  return kindof(fn) === 'function' && fn.displayName === 'stub';
};
