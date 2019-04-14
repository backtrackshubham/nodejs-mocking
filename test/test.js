const lab = exports.lab = require('lab').script();

let Mock = require('./mock-spec.js');
let Rewire = require('./rewire-spec.js');


Mock(lab);
Rewire(lab);