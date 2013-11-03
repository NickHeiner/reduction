'use strict';

var _ = require('lodash'),
    opLift = require('op-lift'),
    createMethodCallback = require('./core/create-method-callback');

function reduction(collection, rawCallback, acc, thisArg) {

    var callback = _.isString(rawCallback) ? opLift(rawCallback) || createMethodCallback(rawCallback) : rawCallback;

    // Lodash uses arguments.length to determine what to do.
    // We must be sure that we call _.reduce with the same length of args that we were called with.
    return _.reduce.apply(null, [collection, callback, acc, thisArg].slice(0, arguments.length));
}

module.exports = reduction;