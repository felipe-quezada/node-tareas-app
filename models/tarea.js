import { v4 } from 'uuid';
const uuid = v4;

class Tarea {
	id = '';
	desc = '';
	realizado = false;
	completadoEn = null;

	constructor(desc) {
		this.id = uuid();
		this.realizado = false;
		this.completadoEn = null; //Date.call();
		this.desc = desc;
	}
}

export default Tarea;
