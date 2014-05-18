/**
 * @license Copyright (c) 2014 Polacks
 * For licensing, see LICENSE
 */

"use strict";

var expect = require("cruks-lib-config").expect;

/**
 * @constructor
 * @param {*} value encapsulated result value
 * @param {Boolean} done true if iterator is done, false otherwise
 */
function IteratorResult(value, done) {
    this.done = expect.boolean().assert(done);
    this.value = value;
}

module.exports = IteratorResult;
