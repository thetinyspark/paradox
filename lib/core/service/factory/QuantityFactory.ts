import Repository from "../../model/repository/Repository";
import Quantity from "../../model/schema/resources/Quantity";
import Resource from "../../model/schema/resources/Resource";
import IFactory from "./IFactory";

export default class QuantityFactory implements IFactory{
    constructor( private _resourceRepository:Repository<Resource>){
        this.fromData = this.fromData.bind(this);
    }

    fromData(obj:any):Quantity{
        const resource = this._resourceRepository.getOneBy('id', obj.resourceID); 

        if( resource === null ){
            // console.log("non existing resource for resource id: "+obj.resourceID);
            return null;
        }
            
        return new Quantity(obj.resourceID, obj.amount);
    }
}