console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require ('lodash');
const note = require('./note.js');

//console.log(_.isString(true));
//console.log(_.isString('Abiodun'));

var filteredArray = _.uniq(['Abiodun', 1, 'Abiodun', 1, 2,3,4]);
console.log(filteredArray);




//var res = note.addNote();
//console.log(res);

//console.log('Result:', note.add(9, -3));

//var user = os.userInfo();
//fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${note.age}.`);
