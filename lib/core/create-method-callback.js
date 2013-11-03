'use strict';

function createMethodCallback(methodName) {
    return function(a, b) {
        return a[methodName](b);
    };
}

module.exports = createMethodCallback;