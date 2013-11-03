'use strict';

var expect = require('chai').expect,
    createMethodCallback = require('../../../lib/core/create-method-callback');

describe('create-method-callback', function () {

    it('creates a callback that calls the named method of the object', function() {

        function fn(num) {
            return num * 2;
        }

        var obj = {
            fn: fn
        },
            arg = 5;

        expect(createMethodCallback('fn')(obj, arg)).to.equal(fn(arg));
    });

});