'use strict';

var expect = require('chai').expect,
    _ = require('lodash'),
    reduction = require('../..');

describe('reduction', function () {

    it('handles a method name', function () {
        var args = [
            ['foo'],
            ['bar', 'baz'],
            ['quux']
        ];
        expect(reduction(args, 'concat')).to.deep.equal(_.flatten(args));
    });

    it('handles normal lodash usage', function () {
        expect(reduction([1, 2, 3], function (a, b) {
            return a + b;
        })).to.equal(6);
    });

    it('handles normal lodash usage with passing an accumulator', function () {
        expect(reduction([1, 2, 3], function (a, b) {
            return a + b;
        }, 5)).to.equal(11);
    });

    it('handles an operator', function () {
        expect(reduction([2, 4, 8], '*')).to.equal(2 * 4 * 8);
    });

    it('works with the lodash example', function () {
        var mapped = _.reduce({ a: 1, b: 2, c: 3 }, function (result, num, key) {
            result[key] = num * 3;
            return result;
        }, {});

        expect(mapped).to.deep.equal({ a: 3, b: 6, c: 9 });
    });

});