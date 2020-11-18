export class Observable{

    static create(value){
        return new Observable(value);
    }

    constructor(value){
        this._observers = new Set();
        this._value = value;
    }

    setValue(value){
        if(value != this._value){
            this._value = value;
            this._notify();
        }
    }

    getValue(){
        return this._value;
    }

    _notify(){
        this._observers.forEach(observer => {
            try{
                observer(this._value);
            }catch(err){
                console.error(err);
            }
        })
    }

    observe(observer){
        this._observers.add(observer);
        return () => this.observers.delete(observer);
    }
}