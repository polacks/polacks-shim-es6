/**
 * @license Copyright (c) 2014 smrtlabs
 * For licensing, see LICENSE
 */

"use strict";

/* global describe: false, it: false */

var assert = require("chai").assert,
    ZipArrayIterator = require(global.paths.root + "/smrt-shim-es6/ZipArrayIterator");

describe("smrt-shim-es6/ZipArrayIterator", function() {
    var arr = new ZipArrayIterator([1, 2, 3], ["a", "b", "c"]),
        entry;

    it("iterates over two arrays at once", function() {
        entry = arr.next();
        assert.strictEqual(false, entry.done);
        assert.deepEqual([1, "a"], entry.value);

        entry = arr.next();
        assert.strictEqual(false, entry.done);
        assert.deepEqual([2, "b"], entry.value);

        entry = arr.next();
        assert.strictEqual(false, entry.done);
        assert.deepEqual([3, "c"], entry.value);

        entry = arr.next();
        assert.strictEqual(true, entry.done);
        assert.deepEqual([undefined, undefined], entry.value);
    });

    it("after finishing it is always consequently done", function() {
        entry = arr.next();
        assert.strictEqual(true, entry.done);
        assert.deepEqual([undefined, undefined], entry.value);
    });
});
