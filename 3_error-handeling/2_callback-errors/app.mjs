import {
	readFile
} from 'fs/promises';

try {
	const myFile = await readFile('./my-file', 'utf-8');
	console.log(myFile);
} catch (error) {
	// handle the error
	console.log('unable to open my-file');

	// you can also throw the error to the next level
	// throw error;
}