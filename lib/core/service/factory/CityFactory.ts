import City from "../../model/schema/city/City";
import IFactory from "./IFactory";

export default class CityFactory implements IFactory{
    constructor( 
        private _buildingFactory:IFactory, 
        private _quantityListFactory:IFactory
    ){
        this.fromData = this.fromData.bind(this);
    }

    fromData(obj:any):City{
        const buildings = []; 
        const wallet = this._quantityListFactory.fromData(obj.wallet);
        if( Array.isArray(obj.buildings)){
            buildings.push( ...obj.buildings.map( (b)=>this._buildingFactory.fromData(b)) );
        }
        return new City(obj.id, obj.name, buildings, wallet);
    }
}