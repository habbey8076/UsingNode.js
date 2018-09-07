console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require ('lodash');
const yargs = require ('yargs');


const note = require('./note.js');


const argv = yargs.argv;
var command = argv._[0];

console.log('Command:', command);
//console.log('Process',process.argv);

console.log('Yargs',argv);

if (command == 'add'){
   // console.log('Adding new note');
    note.addNote(argv.title, argv.body);


}else if (command == 'list'){
    //console.log('Listing all notes');
    note.getAll();

}else if (command == 'read'){
    //console.log('Read all notes');
    note.readAll(argv.title);


}else if (command == 'remove'){

    note.removeAll();
   // console.log('Remove all notes');
}
else{
    console.log('comand not recongnize');
}










//console.log(_.isString(true));
//console.log(_.isString('Abiodun'));

//var filteredArray = _.uniq(['Abiodun', 1, 'Abiodun', 1, 2,3,4]);
//var filteredArray = _.uniq(['Abiodun']);
//console.log(filteredArray);




//var res = note.addNote();
//console.log(res);

//console.log('Result:', note.add(9, -3));

//var user = os.userInfo();
//fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${note.age}.`);
