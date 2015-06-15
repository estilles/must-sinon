/*eslint strict:0*/
//'use strict'

var check = require('./check');

var passthrough = require('./passthrough');

var assertProp = require('./assert-prop');
var assertPropValue = require('./assert-prop-value');
var assertMethod = require('./assert-method');

function mustSinon(Must) {

  Must.prototype.spy = function() {
    this.assert(check.isSpy(this.actual), 'be a sinon spy');
  };

  Must.prototype.stub = function() {
    this.assert(check.isStub(this.actual), 'be a sinon stub');
  };

  passthrough(Must, 'been');

  assertProp(Must, 'called', 'have been called');
  assertProp(Must, 'calledOnce', 'have been called once');
  assertProp(Must, 'calledTwice', 'have been called twice');
  assertProp(Must, 'calledThrice', 'have been called thrice');

  assertPropValue(Must, 'callCount', 'have a call count of %s');

  assertMethod(Must, 'calledAfter', 'have been called after %s');
  assertMethod(Must, 'calledBefore', 'have been called before %s');
  assertMethod(Must, 'calledOn', 'have been called on %s');
  assertMethod(Must, 'calledWith', 'have been called with %s');
  assertMethod(Must, 'calledWithExactly', 'have been called with exactly %s');
  assertMethod(Must, 'calledWithNew', 'have been called with "new"');
  assertMethod(Must, 'returned', 'have returned %s');
}

module.exports = mustSinon;
