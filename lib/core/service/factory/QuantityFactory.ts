import IRepository from "../../model/repository/IRepository";
import Quantity from "../../model/schema/resources/Quantity";
import Resource from "../../model/schema/resources/Resource";
import IFactory from "./IFactory";

export default class QuantityFactory implements IFactory{
    constructor( private _resourceIRepository:IRepository<Resource>){
        this.fromData = this.fromData.bind(this);
    }

    fromData(obj:any):Quantity{
        const resource = this._resourceIRepository.getOneBy('id', obj.resourceID); 

        if( resource === null )
            return null;
            
        const q = new Quantity(obj.resourceID, 0, resource.min, resource.max);
        q.amount = obj.amount; 
        return q;
    }
}