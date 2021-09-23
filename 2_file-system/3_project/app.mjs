import {
	readFile,
	writeFile
} from 'fs/promises';

const data = {
	title: 'My Title',
	heading: 'My Heading'
}

let template = await readFile('./template.html', 'utf8');
for (const [k, v] of Object.entries(data)) {
	template = template.replace(`{{${k}}}`, v);
}

await writeFile('./index.html', template);