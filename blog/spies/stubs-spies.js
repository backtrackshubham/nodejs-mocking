let dep = require('../stubs/dependency.js');

const sideEffectingMethod = (param) => {
    for(let x in param){
        dep.callBackApi(param[x], (res) =>{
            console.log(`I am side affecting, here is your result ${res}`)
        })
    }

};

const registerUsers = (userList, callback) => {
    for(let user in userList){
        callback(user)
    }
}

module.exports={
    sideEffectingMethod,
    registerUsers
}