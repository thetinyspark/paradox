import City from "../../model/schema/city/City";
import UIDService from "../UIDService";
import IFactory from "./IFactory";

export default class CityFactory implements IFactory{
    constructor( 
        private _buildingFactory:IFactory, 
        private _quantityListFactory:IFactory, 
        private _uidService:UIDService
    ){
        this.fromData = this.fromData.bind(this);
    }

    fromData(obj:any):City{
        let buildings = []; 
        const wallet = this._quantityListFactory.fromData(obj.wallet);
        if( Array.isArray(obj.buildings)){
            buildings = obj.buildings.map( 
                (b,id)=>{
                    const data = {...b};
                    const uid = this._uidService.createUID("cities", b.id);
                    data.id = uid;
                    return this._buildingFactory.fromData(data);
                }
            );
        }
        return new City(obj.id, obj.name, buildings, wallet);
    }
}