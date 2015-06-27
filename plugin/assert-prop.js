/*eslint strict:0*/

var errorOnAlways = require('./error-on-always');

function assertProp(target, name, message) {
  target.prototype[name] = function method() {
    errorOnAlways(target, this, name, method);
    this.assert(this.actual[name], message, {expected: true});
  };
}

module.exports = assertProp;
