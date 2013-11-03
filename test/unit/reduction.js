'use strict';

var expect = require('chai').expect,
    _ = require('lodash'),
    reduction = require('../..');

describe('reduction', function () {

    it('handles a method name', function() {
        var args = [['foo'], ['bar', 'baz'], ['quux']];
        expect(reduction(args, 'concat', [])).to.deep.equal(_.flatten(args));
    });

    it('handles normal lodash usage');

    it('handles an operator');

});