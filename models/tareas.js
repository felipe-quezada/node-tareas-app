import { DIR, readData, fs } from '../helpers/readDb.js';
import Tarea from './tarea.js';

class Tareas {
	_listado = {};

	get listado() {
		let array = [];
		Object.keys(this._listado).forEach((value) => {
			array.push(this._listado[value]);
		});
		if (array[0] == undefined) {
			console.log('\nNo hay tareas creadas\n'.red);
		} else {
			console.table(array);
		}
	}

	get index() {
		let opciones = [];
		Object.keys(this._listado).forEach((value) => {
			opciones.push({
				value: value,
				name: `${this._listado[value].desc}`,
			});
		});
		opciones.push({ value: 'cancelar', name: 'cancelar'.red });
		return opciones;
	}

	get doneList() {
		let array = Object.values(this._listado).filter(
			(value) => value.realizado?.valueOf() == true
		);
		if (array[0] == undefined) {
			return console.log('\nNo hay tareas completadas\n'.red);
		} else {
			console.table(array);
		}
	}

	get undoneList() {
		let array = Object.values(this._listado).filter(
			(value) => value.realizado?.valueOf() == false
		);
		if (array[0] == undefined) {
			return console.log('\nTodas las tareas han sido realizadas\n'.green);
		} else {
			console.table(array);
		}
	}

	constructor() {
		//this._listado;
		if (!fs.existsSync(DIR)) {
			this._listado = {};
		} else {
			this._listado = readData()._listado;
		}
	}

	crearTarea(desc) {
		const tarea = new Tarea(desc);
		this._listado[tarea.id] = tarea;
	}
}

export default Tareas;
