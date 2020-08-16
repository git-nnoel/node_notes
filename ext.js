const fs = require('fs');
var textao = process.env.TEXTAO;

const loadNotes = function(){
  const dataBuffer = fs.readFileSync('notes-json.json')
  const dataString = dataBuffer.toString();
  const parsedData = (JSON.parse(dataString));
  return parsedData;

}

const addNotes = function(a,b){
  const note = loadNotes();
  note.push ({
    title: a,
    text: b
  })
  try{

  const noteJSON = JSON.stringify(note);
  fs.writeFileSync('notes-json.json', noteJSON);
  }
  catch (e) {

    console.log('error: empty text')
  }
  return;
}
module.exports = {
  addNotes: addNotes,
  loadNotes: loadNotes
};
