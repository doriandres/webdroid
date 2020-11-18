import { ListAdapter } from "../adapters/list.js";
import { Layout } from "../utils/layout.js";
import { IndexViewModel } from "./../viewmodels/index.js";
import index_layout from './../layouts/index.js';

export class IndexView{
    create(){
        const view = Layout.build(index_layout);

        this._lista = view.querySelector(".lista");
        this._formulario = view.querySelector(".formulario");
        this._texto = view.querySelector(".texto");

        this._indexViewModel = IndexViewModel.create();        
        this._listAdapter = new ListAdapter(this._lista);

        this._listAdapter.setOnItemClicked(item => this._indexViewModel.eliminarDato(item));
        this._indexViewModel.getDatos().observe(items => this._listAdapter.setItems(items));
        this._formulario.addEventListener('submit', event => {
            event.preventDefault();

            if(!this._texto.value) return;

            this.agregar();
            this.limpiar();
        });

        return view;
    }
  
    agregar(){
        const dato = this._texto.value;
        this._indexViewModel.agregarDato({ dato });
    }
    
    limpiar(){
        this._formulario.reset();
    }
}