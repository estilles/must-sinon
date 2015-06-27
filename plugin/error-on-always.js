/*eslint strict:0*/

var format = require('util').format;

function errorOnAlways(Must, assertion, name, method) {
  var matcher;
  var message;

  if (assertion.__sinonAlways) {
    matcher = format('always%s%s',
      name.charAt(0).toUpperCase(), name.substr(1));
    message = format('"%s" is not a Sinon matcher', matcher);
    throw new Must.AssertionError(message, {
      caller: method.caller
    });
  }

}

module.exports = errorOnAlways;
