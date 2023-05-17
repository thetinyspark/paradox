import QuantityList from "../../model/schema/resources/QuantityList";
import IFactory from "./IFactory";

export default class QuantityListFactory implements IFactory{
    constructor( private _quantityFactory:IFactory ){
        this.fromData = this.fromData.bind(this);
    }

    fromData(obj:any[]):QuantityList{
        return new QuantityList( obj.map( this._quantityFactory.fromData ) );
    }
}