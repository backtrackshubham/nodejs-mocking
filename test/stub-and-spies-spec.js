const sinon = require('sinon');

let stubs = require('../blog/spies/stubs-spies.js');
let dep = require('../blog/stubs/dependency.js');
let spiedCallBackApi, mockedCallback;

module.exports = ({it, beforeEach, afterEach, describe}) => {
    describe('Spies',() => {
        beforeEach(() => {
            spiedCallBackApi = sinon.spy(dep,'callBackApi')
        });

        afterEach(() => {
            spiedCallBackApi.restore();
        });

        it('should spy callBackApi', () => {
            stubs.sideEffectingMethod([3]);
            spiedCallBackApi.calledWith(3).should.equal(true);

        });

        it('should spy callBackApi for number of times it is called', () => {
            stubs.sideEffectingMethod([3,6,7]);
            spiedCallBackApi.firstCall.calledWith(3).should.equal(true);
            spiedCallBackApi.secondCall.calledWith(6).should.equal(true);
            spiedCallBackApi.thirdCall.calledWith(7).should.equal(true)
        })
    });
    describe('Stubs',() => {
        beforeEach(() => {
            mockedCallback = sinon.stub()
        });

        afterEach(() => {

        });

        it('should able to count number of times callback called', () => {
            stubs.registerUsers([2,3,4], mockedCallback);
            mockedCallback.calledThrice.should.equal(true);

        })
    })
};