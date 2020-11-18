
export class ViewHolder{
    constructor(view){
        this._view = view;
    }
    
    getView(){
        return this._view;
    }
}

export class ViewAdapter {
    constructor(parent){
        this._parent = parent;
        setTimeout(()=> this.update());
    }

    update(){
        window.requestAnimationFrame(() => {
            const fragment = document.createDocumentFragment();
            for(let i = 0; i < this.getItemCount(); i++){
                const viewHolder = this.onCreateViewHolder(this._parent);
                this.onBindViewHolder(viewHolder, i);
                fragment.appendChild(viewHolder.getView());
            }
            this._parent.innerHTML = "";
            this._parent.appendChild(fragment);
        });
    }

    onCreateViewHolder(parent){
        // Override
    }

    onBindViewHolder(viewHolder, position){
        // Override
    }

    getItemCount(){
        // Override
        return 1;
    }
}