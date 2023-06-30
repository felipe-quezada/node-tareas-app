import inquirer from 'inquirer';

const crearTarea = async () => {
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

export { crearTarea };
