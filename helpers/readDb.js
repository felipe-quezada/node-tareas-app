import fs from 'node:fs';
const DIR = './db/data.json';

const writeData = (data) => {
		fs.writeFileSync(DIR, JSON.stringify(data));
	},
	readData = () => {
		if (!fs.existsSync(DIR)) {
			return null;
		} else {
			let rData = fs.readFileSync(DIR, { encoding: 'utf-8' });
			return JSON.parse(rData);
		}
	};

export { writeData, readData, DIR, fs };
