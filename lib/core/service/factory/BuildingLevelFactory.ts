import BuildingLevel from "../../model/schema/building/BuildingLevel";
import IFactory from "./IFactory";

export default class BuildingLevelFactory implements IFactory{
    constructor( private _quantityListFactory:IFactory){
        this.fromData = this.fromData.bind(this);
    }

    fromData(obj:any):BuildingLevel{
        return new BuildingLevel(
            obj.level, 
            this._quantityListFactory.fromData( obj.cost || [] ),
            this._quantityListFactory.fromData( obj.prod || [] ),
            this._quantityListFactory.fromData( obj.cons || [] ),
        );
    }
}