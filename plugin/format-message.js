'use strict';

var format = require('util').format;
var stringify = require('must').stringify;

function formatMessage(template, args) {
  var argsList = args.map(stringify).join();
  return format.apply(null, [template].concat(argsList));
}

module.exports = formatMessage;
