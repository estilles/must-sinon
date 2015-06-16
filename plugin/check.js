'use strict';

/**
 * Checks if {target} is a Sinon spy
 * @param {any} target - target instance to check
 * @returns {boolan} - true if {target} is a Sinon spy
 * @access private
 */
function isSpy(target) {
  return typeof target === 'function' && /spy#.*/.test(target.id);
}

/**
 * Checks if {target} is a Sinon stub
 * @param {any} target - target instance to check
 * @returns {boolan} - true if {target} is a Sinon stub
 * @access private
 */
function isStub(target) {
  return isSpy(target) &&
    typeof target.func === 'function' && /stub#.*/.test(target.func.id);
}

module.exports = {
  isSpy: isSpy,
  isStub: isStub
};
