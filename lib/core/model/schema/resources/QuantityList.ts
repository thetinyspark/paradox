import Quantity from "./Quantity";

export default class QuantityList{

    private _quantities:Quantity[] = [];

    constructor( quantities:Quantity[] ){
        this.set(quantities);
    }

    public set(quantities:Quantity[] = []):void{
        this._quantities = quantities;
    }

    public get ():Quantity[]{
        return this._quantities;
    }

    public clone():QuantityList{
        return new QuantityList( this._quantities.filter(q=>q !== null ).map( q => q.clone() ) );
    }
}