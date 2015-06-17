/*eslint strict:0*/
//'use strict'

var check = require('./check');

var definePassthrough = require('./define-passthrough');

var assertProp = require('./assert-prop');
var assertPropValue = require('./assert-prop-value');
var assertMethod = require('./assert-method');

/**
 * Extends instance of Must.js with must-sinon plugin
 *
 * @param {object} Must - Must.js instance to extend with
 * @access public
 */
function mustSinon(Must) {

  /**
  * Asserts if {actual} is a spy
  * @method spy
  * @access public
  */
  Must.prototype.spy = function() {
    this.assert(check.isSpy(this.actual), 'be a sinon spy');
  };

  /**
  * Asserts if {actual} is a stub
  * @method stub
  * @access public
  */
  Must.prototype.stub = function() {
    this.assert(check.isStub(this.actual), 'be a sinon stub');
  };

  definePassthrough(Must, 'been');

  /**
  * Asserts if {actual} was called at least once
  * @method called
  * @access public
  */
  assertProp(Must, 'called', 'have been called');

  /**
  * Asserts if {actual} was called exactly once
  * @method calledOnce
  * @access public
  */
  assertProp(Must, 'calledOnce', 'have been called once');

  /**
  * Asserts if {actual} was called exactly twice
  * @method calledTwice
  * @access public
  */
  assertProp(Must, 'calledTwice', 'have been called twice');

  /**
  * Asserts if {sactual} was called exactly thrice
  * @method calledThrice
  * @access public
  */
  assertProp(Must, 'calledThrice', 'have been called thrice');

  /**
  * Asserts if {actual} was called an exact number of times
  * @method callCount
  * @param {number} count - number of times the spy/stub must have been called
  * @access public
  */
  assertPropValue(Must, 'callCount', 'have a call count of %s');

  /**
  * Asserts if {actual} was called after another {spy/stub}
  * @method calledAfter
  * @param {function} spy/stub
  * @access public
  */
  assertMethod(Must, 'calledAfter', 'have been called after %s');

  /**
  * Asserts if {actual} was called before another {spy/stub}
  * @method calledBefore
  * @param {function} spy/stub
  * @access public
  */
  assertMethod(Must, 'calledBefore', 'have been called before %s');

  /**
  * Asserts if {actual} was called on {instance}
  * @method calledOn
  * @param {object} instance - object spy/stub was called on
  * @access public
  */
  assertMethod(Must, 'calledOn', 'have been called on %s');
  assertMethod(Must, 'alwaysCalledOn', 'have always been called on %s');

  /**
  * Asserts if {actual} was called with {arguments}
  * @method calledWith
  * @param {any} arguments - list of arguments spy/stub was called with
  * @access public
  */
  assertMethod(Must, 'calledWith', 'have been called with %s');

  /**
  * Asserts if {actual} was called exactly with {arguments}
  * @method calledWithExactly
  * @param {any} arguments - list of arguments spy/stub was called with
  * @access public
  */
  assertMethod(Must, 'calledWithExactly', 'have been called with exactly %s');

  /**
  * Asserts if {actual} was called exactly with "new"
  * @method calledWithNew
  * @access public
  */
  assertMethod(Must, 'calledWithNew', 'have been called with "new"');

  /**
  * Asserts if {actual} returned {value}
  * @method returned
  * @param {any} value - value returned by spy/stub
  * @access public
  */
  assertMethod(Must, 'returned', 'have returned %s');
}

module.exports = mustSinon;
