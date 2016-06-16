![travis badge](https://travis-ci.org/NickHeiner/reduction.svg?branch=master)

reduction
=========

> _.reduce with syntactic sugar

### Example

````js
var reduction = require('reduction');

// pass in a method name to be called on the accumulator
var concatted = reduction([['foo', 'bar'], ['baz'], ['asdf']], 'concat');
// => ['foo', 'bar', 'baz', 'asdf']

// pass an operator name to be used as the reducing function
var sum = reduction([1, 2, 3], '+');
// => 6

// works just like lodash woah
var mapped = reduction({ a: 1, b: 2, c: 3 }, function(result, num, key) {
  result[key] = num * 3;
  return result;
}, {});
// → { 'a': 3, 'b': 6, 'c': 9 }
````


Functions just like lodash's `reduce` function, but now you can pass a method name or an operator.
If you pass a method name, that method will be called on the accumulator. If you pass an operator,
the equivalent method of that operator will be used as the reducing method.

If you have a method with the same name as an operator, you're gonna have a bad time. This decision
was made for convenience in the 99% of cases when your object doesn't have a callable property with the same
name as an operator. If this turns out to be a big deal for people, I'll revisit it.

### Contributing
This module was made because of a [rejected PR](https://github.com/lodash/lodash/pull/388). PRs welcome.
