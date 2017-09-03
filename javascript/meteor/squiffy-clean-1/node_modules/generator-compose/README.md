# generator-compose

[![Build Status](https://secure.travis-ci.org/hiddentao/generator-compose.png)](http://travis-ci.org/hiddentao/generator-compose)

Compose generator middleware, with arguments pass-through.

Inspired by [koa-compose](https://github.com/koajs/compose), this library allows for arguments to be passed through 
to each middleware within the chain.

## Installation

```bash
$ npm install generator-compose
```

## Usage

```js
var compose = require('generator-compose');

var middleware = [
  function*(param1, param2, next) {
    // do some stuff...

    yield next;
  },
  function*(param1, param2, next) {
    // do some stuff...

    yield next;

    // do some more stuff if you like...
  },
  function*(param1, param2, next) {
    // do some stuff...

    yield next;
  }
];

// example parameters
var obj1 = {},
  obj2 = {};

try {
  var fn = yield compose(middleware);

  fn(obj1, obj2);
} catch (err) {
  // catch error thrown from within middleware methods
}
```

As shown above, each middleware method gets passed the original parameters as 
well as a final `next` callback - which allows it to pass control to the next 
middleware in the chain.

By default the `this` context within each middleware method is the same as that 
for the outer call:


```js
var middleware = [
  function*(next) {
    console.log(this.value);  // 2

    yield next;
  },
];

this.value = 2;

var fn = yield compose(middleware);

fn();  // same as: fn.call(this)
```

## Building

To run the tests:

    $ npm install -g gulp
    $ npm install
    $ npm test

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](https://github.com/hiddentao/generator-compose/blob/master/CONTRIBUTING.md).

## License

MIT - see [LICENSE.md](https://github.com/hiddentao/generator-compose/blob/master/LICENSE.md)dd

