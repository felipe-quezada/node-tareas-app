import inquirer from 'inquirer';
import 'colors';

const preguntas = [
	{
		type: 'list',
		name: 'options',
		message: 'choice option:',
		choices: [
			{
				value: 1,
				name: `${'1'.green}. crear tarea`,
			},
			{
				value: 2,
				name: `${'2'.green}. listar tareas`,
			},
			{
				value: 3,
				name: `${'3'.green}. listar tareas completadas`,
			},
			{
				value: 4,
				name: `${'4'.green}. listar tareas pendientes`,
			},
			{
				value: 5,
				name: `${'5'.green}. completar tarea(s)`,
			},
			{
				value: 6,
				name: `${'6'.green}. borrar tarea(s)`,
			},
			{
				value: 0,
				name: `${'0'.red}. salir`,
			},
		],
		loop: true,
	},
];

const inquirerMenu = async () => {
		let { options } = await inquirer.prompt(preguntas);
		return options;
	},
	pause = async () => {
		await inquirer.prompt([
			{
				type: 'input',
				name: 'pausa',
				message: `presione ${'ENTER'.green} para continuar:`,
			},
		]);
	},
	listMenu = async (objeto, option = true) => {
		let { doneTask } = await inquirer.prompt([
			{
				type: 'list',
				name: 'doneTask',
				message: option ? 'Qué tarea realizarás:' : 'Qué tarea eliminarás:',
				choices: objeto.index,
			},
		]);
		return doneTask;
	},
	crearTarea = async () => {
		let { dataCreate } = await inquirer.prompt([
			{
				type: 'input',
				name: 'dataCreate',
				message: 'descripción de la tarea:',
				validate: (value) => {
					if (value.length < 2) {
						console.log('la descripción de la tarea es muy corta');
					} else {
						return true;
					}
				},
			},
		]);
		return dataCreate;
	};

export { inquirerMenu, pause, listMenu, crearTarea };
