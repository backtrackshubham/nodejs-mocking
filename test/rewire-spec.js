const rewire = require('rewire');
let lamb = (value) => value * 10;
let util = require('../blog/monkey-patching/monkey-patch.js');
let rewiredUtil = rewire('../blog/monkey-patching/monkey-patch.js');


module.exports = ({describe, it, beforeEach, afterEach}) => {
    describe("Test rewire and spies", () => {

        beforeEach(() => {
            rewiredUtil.__set__("__generateRandomHash", lamb)
        });
        afterEach(() => {

        });


        it('should test without rewiring', async () => {
            util.generateUserToken(5, (res) => {
                console.log('in test');
                console.log(res);
                console.log('in test');
                res.should.equal(6);
            });
        });


        it('should test with rewiring', async () => {
            rewiredUtil.generateUserToken(5, (res) => {
                console.log('in test');
                console.log(res);
                console.log('in test');
                res.should.equal(50);
            });
        })

    })
};
