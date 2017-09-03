"use strict";



/**
 * Dummy
 *
 * @api private
 */
var noop = function *() {}




/**
 * Compose `middleware` returning a fully valid middleware 
 * comprised of all those which are passed.
 *
 * @param {Array} middleware Array of generator functions which except the the `next` callback as the last parameter.
 * @return {Function} "one generator function to rule (i.e. run) them all".
 * @api public
 */

module.exports = function(middleware){
  middleware = middleware || [];

  /**
   * We pass all incoming arguments to each middleware function.
   */
  return function *() {
    var args = Array.prototype.slice.call(arguments, 0);

    var next = noop();

    var i = middleware.length;

    while (i--) {
      next = middleware[i].apply(this, args.concat(next));
    }

    yield * next;
  }
}

