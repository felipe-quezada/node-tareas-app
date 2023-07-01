import {
	inquirerMenu,
	listMenu,
	pause,
	crearTarea,
} from './helpers/inquirer.js';
import { writeData } from './helpers/readDb.js';
import { deleteTasker, doneTasker } from './models/example.js';
import Tareas from './models/tareas.js';

const main = async () => {
	let options;
	const tareas = new Tareas();

	do {
		console.clear();
		options = await inquirerMenu();
		switch (options) {
			case 1:
				let createTask = await crearTarea();
				tareas.crearTarea(createTask);
				break;
			case 2:
				console.log(tareas.listado);
				await pause();
				break;
			case 3:
				//console.table(await areDone(tareas));
				console.log(tareas.doneList);
				await pause();
				break;
			case 4:
				console.log(tareas.undoneList);
				await pause();
				break;
			case 5:
				let tareaRealizada = await listMenu(tareas, true);
				doneTasker(tareas, tareaRealizada);
				await pause();
				break;
			case 6:
				let tareaEliminada = await listMenu(tareas, false);
				deleteTasker(tareas, tareaEliminada);
				await pause();
				break;
			default:
				break;
		}
		writeData(tareas);
	} while (options !== 0);
};

main();
