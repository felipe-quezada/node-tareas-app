import { DIR, readData, fs } from '../helpers/readDb.js';
import Tarea from './tarea.js';

class Tareas {
	_listado = {};

	get listado() {
		let array = [];
		Object.keys(this._listado).forEach((value) => {
			array.push({
				descripción: this._listado[value].desc,
				'hora de realizacion': this._listado[value].realizado
					? this._listado[value].completadoEn
					: 'aún sin realizar',
			});
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
		let array = [];
		Object.keys(this._listado).forEach((id) => {
			if (this._listado[id].realizado) {
				array.push({
					descripición: this._listado[id].desc,
					'hora de realizacion': this._listado[id].completadoEn,
				});
			}
		});
		if (array[0] == undefined) {
			return console.log('\nNo hay tareas completadas\n'.red);
		} else {
			return console.table(array);
		}
	}

	get undoneList() {
		let array = [];
		Object.keys(this._listado).forEach((id) => {
			if (!this._listado[id].realizado) {
				array.push({
					descripición: this._listado[id].desc,
				});
			}
		});
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
