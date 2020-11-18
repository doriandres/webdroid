import { ViewAdapter, ViewHolder } from "./../utils/adapter.js";
import { Layout } from "./../utils/layout.js";
import list_item_layout from "./../layouts/list_item.js";

class ListViewHolder extends ViewHolder{
    constructor(view){
        super(view);
        this.text = view.querySelector('.texto_item');
    }
}

export class ListAdapter extends ViewAdapter{
    constructor(parent, items = []){
        super(parent);
        this._items = items;
    }
    
    setOnItemClicked(handler){
        this._onItemClicked = handler;
    }
    
    setItems(items){
        if(items !== this._items){
            this._items = items;
            this.update();
        }
    }

    onCreateViewHolder(){
        const view = Layout.build(list_item_layout);
        return new ListViewHolder(view);
    }

    onBindViewHolder(viewHolder, position){
        const item = this._items[position];
        viewHolder.text.textContent = item.dato;
        viewHolder.getView().addEventListener('click', () => {
            if(this._onItemClicked) this._onItemClicked(item);
        });
    }

    getItemCount(){
        return this._items.length;
    }
}

