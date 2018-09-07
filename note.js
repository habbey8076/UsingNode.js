console.log('Starting notes.js');


var addNote = (title, body) =>{
console.log('Adding note', title, body);

};

var getAll = (title, body) => {
  console.log('Getting all notes');
};

var readAll = (title) => {

  console.log('Getting note', title);
};

var removeAll = (title) =>{

  console.log('Remove all Notes', title);
};
module.exports = {

  addNote,
  getAll,
  readAll,
  removeAll

};









//module.exports.addNote = function ()  {
 // console.log('addNote');
  //return 'New note';


//};

//module.exports.add =  (a, b) => {

  //return a + b;

//};
