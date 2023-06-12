import TemplateBuilding from "../../model/schema/building/TemplateBuilding";
import IUIDService from "../IUIDService";
import IFactory from "./IFactory";

export default class TemplateBuildingFactory implements IFactory{
    constructor( private _levelFactory:IFactory,private _uidService:IUIDService){
        this.fromData = this.fromData.bind(this);
    }

    fromData(obj:any):TemplateBuilding{
        const uid = this._uidService.createUID("templates",obj.id);
        return new TemplateBuilding(
            uid, 
            obj.name, 
            obj.levels.map(this._levelFactory.fromData )
        );
    }
}