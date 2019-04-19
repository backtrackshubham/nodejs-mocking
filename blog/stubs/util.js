const dep = require('./dependency.js');
const addInt = (op1, op2) => dep.add(op1, op2);
const subInt = (op1, op2) => dep.sub(op1, op2);
const divide = (op1, op2) => dep.callBackDivide(op1, op2, (err, res) => {
    return err ? err : res
});

module.exports = {
    addInt,
    subInt,
    divide
};
