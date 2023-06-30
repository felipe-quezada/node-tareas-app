import fs from 'node:fs';
const DIR = './db';

const writeData = (data) => {
		fs.existsSync(DIR)
			? fs.writeFileSync(`${DIR}/data.json`, JSON.stringify(data))
			: fs.mkdirSync(DIR);
	},
	readData = () => {
		if (!fs.existsSync(DIR)) {
			return null;
		} else {
			let rData = fs.readFileSync(`${DIR}/data.json`, { encoding: 'utf-8' });
			return JSON.parse(rData);
		}
	};

export { writeData, readData, DIR, fs };
