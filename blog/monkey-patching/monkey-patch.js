const __generateRandomHash = (arg) => {
    //Some complex logic/algo like below :p
    return arg + 1;
};
const generateUserToken = (userCreds, callback) => {
    let res = __generateRandomHash(userCreds)
    //Do some operation on results
    callback(res);
};
module.exports = {
    generateUserToken:generateUserToken
};