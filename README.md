# <a name="top"></a>must-sinon

[![Build Status][travis-badge]][travis-url]
[![Code Climate][gpa-badge]][codeclimate-url]
[![Test Coverage][coverage-badge]][codeclimate-url]

**must-sinon** adds [SinonJS][sinon-url] related matchers to [Must.js][must-url].

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Matchers](#matchers)
- [Unit Testing](#unit-testing)
- [License](#license)

<a name="requirements"></a>
## Requirements

must-sinon version | MustJS version | SinonJS version
------------------ | -------------- | ---------------
`1.x.x` | `???` | `^1.15.x`

[Back to Top](#top)

<a name="installation"></a>
## Installation
[![npm][npm-badge]][npm-url]

**must-sinon** is available on [npm][npm-url].

```js
npm install --save-dev must-sinon
```

[Back to Top](#top)

<a name="usage"></a>
## Usage
```js
var must = require('must');
var mustPromise = require('must-promise');
mustSinon(must);
```

[Back to Top](#top)

<a name="matchers"></a>
## Matchers

### #spy
```js
var spy = sinon.spy();
spy.must.be.a.spy();
```

### #stub
```js
var stub = sinon.stub();
stub.must.be.a.stub();
```

### #called
```js
var spy = sinon.spy();
spy();
spy.must.have.been.called();
```

### #calledOnce
```js
var spy = sinon.spy();
spy();
spy.must.have.been.calledOnce();
```

### #calledTwice
```js
var spy = sinon.spy();
spy();
spy();
spy.must.have.been.calledTwice();
```

### #calledThrice
```js
var spy = sinon.spy();
spy();
spy();
spy();
spy.must.have.been.calledThrice();
```

### #calledCount
```js
var spy = sinon.spy();
spy();
spy();
spy();
spy.must.have.calledCount(3);
```

### #calledBefore
```js
var spy1 = sinon.spy();
var spy2 = sinon.spy();
spy1();
spy2();
spy1.must.have.been.calledBefore(spy2);
```

### #calledAfter
```js
var spy1 = sinon.spy();
var spy2 = sinon.spy();
spy1();
spy2();
spy2.must.have.been.calledBefore(spy1);
```

### #calledOn
```js
var instance = {
  spy: sinon.spy()
};
instance.spy.must.have.been.calledOn(instance);
```

### #calledWith
```js
var spy = sinon.spy();
spy(1, 2, 3);
spy.must.have.been.calledWith(1);
spy.must.have.been.calledWith(1, 2);
spy.must.have.been.calledWith(1, 2, 3);
```

### #calledWithExactly
```js
var spy = sinon.spy();
spy(1, 2, 3);
spy.must.have.been.calledWithExactly(1, 2, 3);
```

### #calledWithNew
```js
var Spy = sinon.spy();
var spy = new Spy();
Spy.must.have.been.calledWithNew();
```

### #returned
```js
var stub = sinon.stub();
stub.returns('OK');
stub.must.have.returned('OK');
```

[Back to Top](#top)

<a name="unit-testing"></a>
## Unit Testing
To run unit tests simply:

```
git clone https://github.com/JohnnyEstilles/must-sinon.git
cd must-sinon
npm install
npm test
```

[Back to Top](#top)

<a name="license"></a>
## License
**must-sinon** is free and open source under the AGPL-3.0 License.

Copyright (c) 2015 [Johnny Estilles][jme-url], [http://www.agentia.asia][agentia-url]

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

[Back to Top](#top)

[jme-url]: https://github.com/JohnnyEstilles
[agentia-url]: http://www.agentia.asia

[travis-badge]: https://travis-ci.org/JohnnyEstilles/must-sinon.svg?branch=master
[travis-url]: https://travis-ci.org/JohnnyEstilles/must-sinon

[codeclimate-url]: https://codeclimate.com/github/JohnnyEstilles/must-sinon
[gpa-badge]: https://codeclimate.com/github/JohnnyEstilles/must-sinon/badges/gpa.svg
[coverage-badge]: https://codeclimate.com/github/JohnnyEstilles/must-sinon/badges/coverage.svg

[npm-badge]: https://badge.fury.io/js/must-sinon.svg
[npm-url]: https://npmjs.org/package/must-sinon

[must-url]: https://github.com/moll/js-must
[sinon-url]: http://sinonjs.org
