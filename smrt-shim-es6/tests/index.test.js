/**
 * @license Copyright (c) 2014 smrtlabs
 * For licensing, see LICENSE
 */

"use strict";

/* global describe: false, it: false */

var assert = require("chai").assert,
    shim = require(global.paths.root + "/smrt-shim-es6");

describe("smrt-shim-es6", function() {
    it("exports modules correctly", function() {
        assert.isFunction(shim.ArrayIterator);
        assert.isFunction(shim.IteratorResult);
        assert.isFunction(shim.Map);
        assert.isFunction(shim.Set);
        assert.isFunction(shim.Symbol);
    });
});
