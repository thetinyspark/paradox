import IRepository from "../../model/repository/IRepository";
import Building from "../../model/schema/building/Building";
import TemplateBuilding from "../../model/schema/building/TemplateBuilding";
import IUIDService from "../IUIDService";
import IFactory from "./IFactory";

export default class BuildingFactory implements IFactory{

    constructor(private _repo:IRepository<TemplateBuilding>, private _uidService:IUIDService){
        this.fromData = this.fromData.bind(this);
    }

    fromData(obj:any):Building{
        const template = this._repo.getOneBy('id', obj.tplID) || null; 
        if( template === null )
            return null;

        const id = this._uidService.createUID("buildings",obj.id);
        
        if( template.levels.length === 0) 
            return  new Building(template.name, null,template.id, id);


        const level = template.levels.find( l=>l.level === obj.level) || template.levels[0];
        return  new Building(
            template.name, 
            level.clone(), 
            template.id, 
            id
        );
    }
}