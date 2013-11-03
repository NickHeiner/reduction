'use strict';

var _ = require('lodash'),
    opLift = require('op-lift'),
    createMethodCallback = require('./core/create-method-callback');

function reduction(collection, rawCallback, acc, thisArg) {

    var callback = _.isString(rawCallback) ? opLift(rawCallback) || createMethodCallback(rawCallback) : rawCallback;

    return _.reduce(collection, callback, acc, thisArg);
}

module.exports = reduction;