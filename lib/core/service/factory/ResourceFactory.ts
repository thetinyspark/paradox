import Resource from "../../model/schema/resources/Resource";
import IUIDService from "../IUIDService";
import IFactory from "./IFactory";

export default class ResourceFactory implements IFactory{
    constructor(private _uidService:IUIDService){
        this.fromData = this.fromData.bind(this);
    }

    fromData(obj:any):Resource{
        return new Resource(this._uidService.createUID("resources",obj.id), obj.name);
    }
}