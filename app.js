const fs = require('fs');
const yargs = require('yargs')
const notes = require('./ext.js')

if (process.argv.length > 2)
notes.addNotes(process.argv[2], process.argv[3])

const dataBuffer = fs.readFileSync('notes-json.json')
const dataString = dataBuffer.toString();
const parsedData = JSON.parse(dataString);
console.log(parsedData)
