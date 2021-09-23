import {
	writeFile
} from "fs/promises";

const myData = 'Hello, from the app!';
await writeFile('./written-file.txt', myData);