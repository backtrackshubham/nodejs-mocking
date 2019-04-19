const sinon = require('sinon');

let util = require('../blog/stubs/util.js');
let dep = require('../blog/stubs/dependency.js');


module.exports = ({it, beforeEach, afterEach, describe}) => {
    describe('mock-spec',() => {
        it("should add two int", () => {
            let res = util.addInt(3, 4);
            console.log('when result isn\'t mocked');
            console.log(res);
            res.should.equal(7)
        })

        it("should subtract two int", () => {
            let res = util.subInt(3, 4);
            console.log('when result isn\'t mocked');
            console.log(res);
            res.should.equal(1)
        })

//lets add some mocking ~ stubbing

        it("should mock add", () => {
            sinon.stub(util, 'addInt').returns(10); //whatever value i give for args of addInt, i would always get 10
            let res = util.addInt(3, 4);
            console.log('when result is mocked for add');
            console.log(res);
            res.should.equal(10);
        });

        it("should divide valid inputs", () => {
            let res = util.divide(9, 3);
            console.log('when call back is not mocked');
            res.should.equal(3)
        });

        it("should mock divide methods", () => {
            sinon.stub(dep, 'callBackDivide').callsFake((op1, op2, callback) => {
                console.log('Its mocked')
                return callback(34)
            })
            let res = util.divide(9, 3);
            console.log('when call back is mocked');
            res.should.equal(34)
        });

    })
}