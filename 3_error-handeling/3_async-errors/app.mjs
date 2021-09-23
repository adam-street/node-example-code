import {
	readFile
} from 'fs';

const myFile = readFile('./my-file', 'utf-8', (error, data) => {
	if (error) {
		// handle the error
		console.log('unable to open my-file');

		// you can also throw the error to the next level
		// throw error;
	} else {
		console.log(data);
	}
});