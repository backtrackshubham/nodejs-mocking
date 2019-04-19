const add = (x, y) => x + y;
const sub = (x, y) => x >= y ? x - y : y - x;
const callBackDivide = (x, y, callback) => {
    return y === 0 ? callback("Can't divide with zero", null) :
        callback(null, x / y)
};

const callBackApi = (param, callback) => {
    callback(param)
}

module.exports = {
    add,
    sub,
    callBackDivide,
    callBackApi
}
