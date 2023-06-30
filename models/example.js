const doneTasker = async (objeto, value) => {
		console.clear();

		if (value == 'cancelar') {
			console.clear();
		} else if (objeto._listado[value].realizado == false) {
			objeto._listado[value].completadoEn = Date.call();
			objeto._listado[value].realizado = true;
			console.log(`\nTarea ${objeto._listado[value].desc.green} realizada\n`);
		} else {
			console.log('\nla tarea ya está realizada\n'.red);
		}
	},
	deleteTasker = async (objeto, value) => {
		console.clear();

		if (value == 'cancelar') {
			console.clear();
		} else if (objeto._listado[value]) {
			let dTask = objeto._listado[value].desc;
			delete objeto._listado[value];
			console.log(`\nTarea ${dTask.red} eliminada con exito`);
		}
	};

export { doneTasker, deleteTasker };
