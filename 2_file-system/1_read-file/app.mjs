import {
	readFile
} from 'fs/promises';

// read the text file from your computer 			  v-------- this is telling the readFile function to return the resulting buffer in a utf8 string encoding!
const textFile = await readFile('./text-file.txt', 'utf-8');
const jsonFile = await readFile('./json-file.json', 'utf-8');

// convert the jsonFile string into a json object
const jsonData = JSON.parse(jsonFile);

console.log(textFile);
console.log(jsonData);