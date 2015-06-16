'use strict';

var must = require('must');
var sinon = require('sinon');
var mustSinon = require('../');
mustSinon(must);

describe('must-sinon', function() {

  before(function() {
    this.spy = sinon.spy();
    this.stub = sinon.stub();
    this.invalid = function() {};
  });

  beforeEach(function() {
    this.spy.reset();
    this.stub.reset();
  });

  describe('detect spies/stubs', function() {

    describe('#spy', function() {

      describe('positive assertion', function() {

        it('must pass if spy', function() {
          this.spy.must.be.a.spy();
        });

        it('must pass if stub (stubs are also spies)', function() {
          this.stub.must.be.a.spy();
        });

        it('must fail if not spy', function() {
          (function() {
            this.invalid.must.be.a.spy();
          }).bind(this).must.throw(/be a sinon spy/);
        });

      });

      describe('negative assertion', function() {

        it('must pass if not spy', function() {
          this.invalid.must.not.be.a.spy();
        });

        it('must fail if spy', function() {
          (function() {
            this.spy.must.not.be.a.spy();
          }).bind(this).must.throw(/not be a sinon spy/);
        });

        it('must fail if stub (stubs are also spies)', function() {
          (function() {
            this.stub.must.not.be.a.spy();
          }).bind(this).must.throw(/not be a sinon spy/);
        });

      });

    });

    describe('#stub', function() {

      describe('positive assertion', function() {

        it('must pass if stub', function() {
          this.stub.must.be.a.stub();
        });

        it('must fail if spy (spies are not stubs)', function() {
          (function() {
            this.spy.must.be.a.stub();
          }).bind(this).must.throw(/be a sinon stub/);
        });

        it('must fail if not stub', function() {
          (function() {
            this.invalid.must.be.a.stub();
          }).bind(this).must.throw(/be a sinon stub/);
        });

      });

      describe('negative assertion', function() {

        it('must pass if not stub', function() {
          this.invalid.must.not.be.a.stub();
        });

        it('must pass if spy (spies are not stubs)', function() {
          this.spy.must.not.be.a.stub();
        });

        it('must fail if stub', function() {
          (function() {
            this.stub.must.not.be.a.stub();
          }).bind(this).must.throw(/not be a sinon stub/);
        });

      });

    });

  });

  describe('detect called/call counts', function() {

    describe('#called', function() {

      describe('positive assertion', function() {

        it('must pass if called', function() {
          this.spy();
          this.spy.must.have.been.called();
        });

        it('must fail if not called', function() {
          (function() {
            this.spy.must.have.been.called();
          }).bind(this).must.throw(/have been called/);
        });

      });

      describe('negative assertion', function() {

        it('must pass if not called', function() {
          this.spy.must.not.have.been.called();
        });

        it('must fail if called', function() {
          this.spy();
          (function() {
            this.spy.must.not.have.been.called();
          }).bind(this).must.throw(/not have been called/);
        });

      });

    });

    describe('#calledOnce', function() {

      describe('positive assertion', function() {

        it('must pass if called once', function() {
          this.spy();
          this.spy.must.have.been.calledOnce();
        });

        it('must fail if not called once', function() {
          (function() {
            this.spy.must.have.been.calledOnce();
          }).bind(this).must.throw(/have been called once/);
        });

      });

      describe('negative assertion', function() {

        it('must pass if not called once', function() {
          this.spy.must.not.have.been.calledOnce();
        });

        it('must fail if called once', function() {
          this.spy();
          (function() {
            this.spy.must.not.have.been.calledOnce();
          }).bind(this).must.throw(/not have been called once/);
        });

      });

    });

    describe('#calledTwice', function() {

      describe('positive assertion', function() {

        it('must pass if called twice', function() {
          this.spy();
          this.spy();
          this.spy.must.have.been.calledTwice();
        });

        it('must fail if not called twice', function() {
          (function() {
            this.spy.must.have.been.calledTwice();
          }).bind(this).must.throw(/have been called twice/);
        });

      });

      describe('negative assertion', function() {

        it('must pass if not called twice', function() {
          this.spy.must.not.have.been.calledTwice();
        });

        it('must fail if called twice', function() {
          this.spy();
          this.spy();
          (function() {
            this.spy.must.not.have.been.calledTwice();
          }).bind(this).must.throw(/not have been called twice/);
        });

      });

    });

    describe('#calledThrice', function() {

      describe('positive assertion', function() {

        it('must pass if called thrice', function() {
          this.spy();
          this.spy();
          this.spy();
          this.spy.must.have.been.calledThrice();
        });

        it('must fail if not called thrice', function() {
          (function() {
            this.spy.must.have.been.calledThrice();
          }).bind(this).must.throw(/have been called thrice/);
        });

      });

      describe('negative assertion', function() {

        it('must pass if not called thrice', function() {
          this.spy.must.not.have.been.calledThrice();
        });

        it('must fail if called thrice', function() {
          this.spy();
          this.spy();
          this.spy();
          (function() {
            this.spy.must.not.have.been.calledThrice();
          }).bind(this).must.throw(/not have been called thrice/);
        });

      });

    });

    describe('#callCount', function() {

      describe('positive assertion', function() {

        it('must pass if call count matches', function() {
          this.spy();
          this.spy();
          this.spy();
          this.spy.must.have.callCount(3);
        });

        it('must fail if call count doesn\'t match', function() {
          (function() {
            this.spy.must.have.callCount(3);
          }).bind(this).must.throw(/have a call count of/);
        });

      });

      describe('negative assertion', function() {

        it('must pass if call count doesn\'t match', function() {
          this.spy.must.not.have.callCount(3);
        });

        it('must fail if called thrice', function() {
          this.spy();
          this.spy();
          this.spy();
          (function() {
            this.spy.must.not.have.callCount(3);
          }).bind(this).must.throw(/not have a call count of/);
        });

      });

    });

  });

  describe('detect calls with args', function() {

    describe('#calledWith', function() {

      describe('positive assertion', function() {

        it('must pass if called with args', function() {
          this.spy(1, 2, 3);
          this.spy.must.have.been.calledWith(1);
          this.spy.must.have.been.calledWith(1, 2);
          this.spy.must.have.been.calledWith(1, 2, 3);
        });

        it('must fail if not called with args', function() {
          this.spy(4, 5, 6);
          (function() {
            this.spy.must.have.been.calledWith(1, 2, 3);
          }).bind(this).must.throw(/have been called with/);
        });

      });

      describe('negative assertion', function() {

        it('must pass if not called with args', function() {
          this.spy(4, 5, 6);
          this.spy.must.not.have.been.calledWith(1, 2, 3);
        });

        it('must fail if called with args', function() {
          this.spy(1, 2, 3);
          (function() {
            this.spy.must.not.have.been.calledWith(1, 2, 3);
          }).bind(this).must.throw(/not have been called with/);
        });

      });

    });

    describe('#calledWithExactly', function() {

      describe('positive assertion', function() {

        it('must pass if called with exact args', function() {
          this.spy(1, 2, 3);
          this.spy.must.have.been.calledWithExactly(1, 2, 3);
        });

        it('must fail if not called with exact args', function() {
          this.spy(1, 2, 3, 4);
          (function() {
            this.spy.must.have.been.calledWithExactly(1, 2, 3);
          }).bind(this).must.throw(/have been called with exactly/);
        });

      });

      describe('negative assertion', function() {

        it('must pass if not called with exact args', function() {
          this.spy(1, 2, 3, 4);
          this.spy.must.not.have.been.calledWithExactly(1, 2, 3);
        });

        it('must fail if called with exact args', function() {
          this.spy(1, 2, 3);
          (function() {
            this.spy.must.not.have.been.calledWithExactly(1, 2, 3);
          }).bind(this).must.throw(/not have been called with exactly/);
        });

      });

    });

  });

  describe('detect call order', function() {

    describe('#calledBefore', function() {

      describe('positive assertion', function() {

        it('must pass if called before another spy', function() {
          var otherSpy = sinon.spy();
          this.spy();
          otherSpy();
          this.spy.must.have.been.calledBefore(otherSpy);
        });

        it('must fail if not called before another spy', function() {
          var otherSpy = sinon.spy();
          otherSpy();
          this.spy();
          (function() {
            this.spy.must.have.been.calledBefore(otherSpy);
          }).bind(this).must.throw(/have been called before/);
        });

      });

      describe('negative assertion', function() {

        it('must pass if not called before another spy', function() {
          var otherSpy = sinon.spy();
          otherSpy();
          this.spy();
          this.spy.must.not.have.been.calledBefore(otherSpy);
        });

        it('must fail if called before another spy', function() {
          var otherSpy = sinon.spy();
          this.spy();
          otherSpy();
          (function() {
            this.spy.must.not.have.been.calledBefore(otherSpy);
          }).bind(this).must.throw(/not have been called before/);
        });

      });

    });

    describe('#calledAfter', function() {

      describe('positive assertion', function() {

        it('must pass if called after another spy', function() {
          var otherSpy = sinon.spy();
          otherSpy();
          this.spy();
          this.spy.must.have.been.calledAfter(otherSpy);
        });

        it('must fail if not called after another spy', function() {
          var otherSpy = sinon.spy();
          this.spy();
          otherSpy();
          (function() {
            this.spy.must.have.been.calledAfter(otherSpy);
          }).bind(this).must.throw(/have been called after/);
        });

      });

      describe('negative assertion', function() {

        it('must pass if not called after another spy', function() {
          var otherSpy = sinon.spy();
          this.spy();
          otherSpy();
          this.spy.must.not.have.been.calledAfter(otherSpy);
        });

        it('must fail if called after another spy', function() {
          var otherSpy = sinon.spy();
          otherSpy();
          this.spy();
          (function() {
            this.spy.must.not.have.been.calledAfter(otherSpy);
          }).bind(this).must.throw(/not have been called after/);
        });

      });

    });

  });

  describe('detect other calls', function() {

    describe('#calledOn', function() {

      describe('positive assertion', function() {

        it('must pass if called on target object', function() {
          this.spy();
          this.spy.must.have.been.calledOn(this);
        });

        it('must fail if not called on target object', function() {
          (function() {
            this.spy.must.have.been.calledOn(this);
          }).bind(this).must.throw(/have been called on/);
        });

      });

      describe('negative assertion', function() {

        it('must pass if not called on target object', function() {
          this.spy.must.not.have.been.calledOn(this);
        });

        it('must fail if called on target object', function() {
          this.spy();
          (function() {
            this.spy.must.not.have.been.calledOn(this);
          }).bind(this).must.throw(/not have been called on/);
        });

      });

    });

    describe('#calledWithNew', function() {

      describe('positive assertion', function() {

        it('must pass if called on with "new"', function() {
          var Spy = this.spy;
          this.instance = new Spy();
          this.spy.must.have.been.calledWithNew();
        });

        it('must fail if not called with "new"', function() {
          (function() {
            this.spy.must.have.been.calledWithNew();
          }).bind(this).must.throw(/have been called with "new"/);
        });

      });

      describe('negative assertion', function() {

        it('must pass if not called on target object', function() {
          this.spy.must.not.have.been.calledWithNew();
        });

        it('must fail if called on target object', function() {
          var Spy = this.spy;
          this.instance = new Spy();
          (function() {
            this.spy.must.not.have.been.calledWithNew();
          }).bind(this).must.throw(/not have been called with "new"/);
        });

      });

    });

  });

  describe('detect returned value', function() {

    describe('#returned', function() {

      describe('positive assertion', function() {

        it('must pass if returns specified value', function() {
          this.stub.returns('OK');
          this.stub();
          this.stub.must.have.returned('OK');
        });

        it('must fail if doesn\'t return specified value', function() {
          this.stub.returns('BAD');
          this.stub();
          (function() {
            this.stub.must.have.returned('OK');
          }).bind(this).must.throw(/have returned/);
        });

      });

      describe('negative assertion', function() {

        it('must pass if doesn\'t return specified value', function() {
          this.stub.returns('BAD');
          this.stub();
          this.stub.must.not.have.returned('OK');
        });

        it('must fail if returns specified value', function() {
          this.stub.returns('OK');
          this.stub();
          (function() {
            this.stub.must.not.have.returned('OK');
          }).bind(this).must.throw(/not have returned/);
        });

      });

    });

  });

});
