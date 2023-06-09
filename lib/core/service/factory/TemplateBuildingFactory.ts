import TemplateBuilding from "../../model/schema/building/TemplateBuilding";
import UIDService from "../UIDService";
import IFactory from "./IFactory";

export default class TemplateBuildingFactory implements IFactory{
    constructor( private _levelFactory:IFactory,private _uidService:UIDService){
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