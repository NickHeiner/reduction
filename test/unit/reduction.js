'use strict';

var expect = require('chai').expect,
    _ = require('lodash'),
    reduction = require('../..');

describe('reduction', function () {

    it('handles a method name', function() {
        var args = [['foo'], ['bar', 'baz'], ['quux']];
        expect(reduction(args, 'concat')).to.deep.equal(_.flatten(args));
    });

    it('handles normal lodash usage', function() {
        expect(reduction([1, 2, 3], function(a, b) {
            return a + b;
        })).to.equal(6);
    });

    it('handles an operator', function() {
        expect(reduction([2, 4, 8], '*')).to.equal(2 * 4 * 8);
    });

});