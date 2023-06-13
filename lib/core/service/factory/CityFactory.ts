import City from "../../model/schema/city/City";
import IUIDService from "../IUIDService";
import IFactory from "./IFactory";

export default class CityFactory implements IFactory{
    constructor( 
        private _buildingFactory:IFactory, 
        private _quantityListFactory:IFactory, 
        private _uidService:IUIDService
    ){
        this.fromData = this.fromData.bind(this);
    }

    fromData(obj:any):City{
        let buildings = []; 
        const wallet = this._quantityListFactory.fromData(obj.wallet);
        /* istanbul ignore else */
        if( Array.isArray(obj.buildings)){
            buildings = obj.buildings.map( 
                (b,id)=>{
                    return this._buildingFactory.fromData({...b});
                }
            );
        }

        const uid = this._uidService.createUID("cities", obj.id);
        return new City(uid, obj.name, buildings, wallet);
    }
}