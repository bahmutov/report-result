# report-result

> Top level curried functions for console output on success or error

[![NPM][npm-icon] ][npm-url]

[![Build status][ci-image] ][ci-url]
[![semantic-release][semantic-image] ][semantic-url]
[![js-standard-style][standard-image]][standard-url]

## Use

Use this module to report top level result of an action. 

Simple example

```js
const report = require('report-result')
const result = report.success('it worked!', 'my action')(42)
// result is 42 (report functions pass any result)
```

output

```
----------------------------
it worked! my action
42
----------------------------
```

Example with promises

```js
const report = require('report-result')
doSomething()
  .then(...)
  .then(report.success('action ok', details))
  .catch(report.failure('failed', details))
// report.error is alias for report.failure
```

`message` and `details` are options and can have many items. The exception
will be forwarded to the Sentry server using
[node-sentry-error-reporter](https://github.com/bahmutov/node-sentry-error-reporter)

## Why?

Anything to make working with promises simpler. Thus curried functions that expect single
result and return it after printing the message.

Related project: [little-store](https://github.com/bahmutov/little-store)

### Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2016

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/report-result/issues) on Github

## MIT License

Copyright (c) 2016 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[npm-icon]: https://nodei.co/npm/report-result.png?downloads=true
[npm-url]: https://npmjs.org/package/report-result
[ci-image]: https://travis-ci.org/bahmutov/report-result.png?branch=master
[ci-url]: https://travis-ci.org/bahmutov/report-result
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
