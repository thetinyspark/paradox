import TemplateBuilding from "../../model/schema/building/TemplateBuilding";
import IFactory from "./IFactory";

export default class TemplateBuildingFactory implements IFactory{
    constructor( private _levelFactory:IFactory){
        this.fromData = this.fromData.bind(this);
    }

    fromData(obj:any):TemplateBuilding{
        return new TemplateBuilding(
            obj.id, 
            obj.name, 
            obj.levels.map(this._levelFactory.fromData )
        );
    }
}