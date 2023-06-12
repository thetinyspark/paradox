import { Model, Proxy } from "@thetinyspark/coffe-maker";
import IRepository from "./IRepository";

export default class Repository<T> extends Proxy implements IRepository<T>{
    
    private _state:Model = null;
    private _key:string  = "data";

    constructor(storeModel:Model = new Model(), key:string ="data"){
        super();
        this._key   = key;
        this._state = storeModel;
        this.reset();
    }

    reset(){
        const save = {};
        save[this._key] = new Array<T>();
        this._state.setState(save);
    }

    add(obj:T):void{
        const data = this.getAll();
        data.push(obj);

        const save = {};
        save[this._key] = data;
        this._state.setState(save);
    }

    remove(obj:T):void{
        const data = this.getAll();
        data.splice( data.indexOf(obj), 1 );

        const save = {};
        save[this._key] = data;
        this._state.setState(save);
    }

    getAllBy(critera:string, value:any):T[]{
        return this.getAll().filter( 
            (current:T)=>{
                return current[critera] === value;
            }
        );
    }

    getOneBy(critera:string, value:any):T{
        return this.getAll().find( 
            (current:T)=>{
                return current[critera] === value;
            }
        ) || null;
    }

    getAll():T[]{
        return this._state.getState()[this._key];
    }
}