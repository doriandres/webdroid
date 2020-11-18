import { Observable } from "./../utils/observable.js";

export class IndexViewModel{
    static create(){
        return new IndexViewModel();
    }

    constructor(){
        this._datos = Observable.create([]);
    }

    eliminarDato(dato){
        this._datos.setValue(this._datos.getValue().filter(v => v!== dato));
    }

    agregarDato(dato){
        this._datos.setValue([
            ...this._datos.getValue(),
            dato
        ]);
    }

    getDatos(){
        return this._datos;
    }
}