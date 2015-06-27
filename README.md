# <a name="top"></a>![must-sinon logo][logo-url]

[![Build Status][travis-badge]][travis-url]
[![Code Climate][gpa-badge]][codeclimate-url]
[![Test Coverage][coverage-badge]][codeclimate-url]

**must-sinon** adds [SinonJS][sinon-url] related assertion matchers to [Must.js][must-url].

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Assertion Matchers](#matchers)
- [Chainable Properties](#properties)
- [Unit Testing](#unit-testing)
- [License](#license)

<a name="requirements"></a>
## Requirements
The current version of **must-sinon** requires Must.js `0.13.0` and SinonJS `1.15.0`.

must-sinon | Requires<br>Must.js | Requires<br>SinonJS
--- | --- | ---
`1.x.x` | `^0.13.0` | `^1.15.0`

[Back to Top](#top)

<a name="installation"></a>
## Installation
[![npm][npm-badge]][npm-url]

**must-sinon** will be available soon on [npm][npm-url].

```js
npm install --save-dev must-sinon
```

[Back to Top](#top)

<a name="usage"></a>
## Usage
```js
var must = require('must');
var mustSinon = require('must-sinon');
mustSinon(must);
```

[Back to Top](#top)

<a name="matchers"></a>

## Assertion Matchers
**must-sinon** adds the following assertion matchers to Must.js.

Matcher | Usage
--- | ---
spy | `spy.must.be.a.spy()`
stub | `stub.must.be.a.stub()`
called | `spy.must.have.been.called()`
calledOnce | `spy.must.have.been.calledOnce()`
calledTwice | `spy.must.have.been.calledTwice()`
calledThrice | `spy.must.have.been.calledThrice()`
calledCount | `spy.must.have.calledCount(3)`
calledBefore | `spy1.must.have.been.calledBefore(spy2)`
calledAfter | `spy2.must.have.been.calledBefore(spy1)`
calledOn | `instance.spy.must.have.been.calledOn(instance)`
calledWith | `spy.must.have.been.calledWith(1, 2)`
calledWithExactly | `spy.must.have.been.calledWithExactly(1, 2, 3)`
calledWithNew | `Constructor.must.have.been.calledWithNew()`
returned | `stub.must.have.returned('OK')`

[Back to Top](#top)

<a name="properties"></a>
## Chainable Properties
**must-sinon** adds the following chainable properties to Must.js.

Helper | Type | Usage
--- | --- | ---
been | Passthrough | `spy.must.have.been.called()`
never | Passthrough Negator | `spy.must.have.never.been.called()`
always | Passthrough Modifier | `spy.must.have.always.been.calledWith(1, 2)`<br>`spy.must.have.always.been.calledWithExactly(1, 2)`<br>`spy.must.have.always.been.calledOn(1, 2)`<br>`spy.must.have.always.been.calledWithNew(1, 2)`<br>`spy.must.have.always.returned(1)`

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

[logo-url]: media/logo-must-sinon.jpg
[must-url]: https://github.com/moll/js-must
[sinon-url]: http://sinonjs.org
