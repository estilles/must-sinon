/*eslint strict:0*/
//'use strict'

function assertProp(target, name, message) {
  target.prototype[name] = function() {
    this.assert(this.actual[name], message, {expected: true});
  };
}

module.exports = assertProp;
