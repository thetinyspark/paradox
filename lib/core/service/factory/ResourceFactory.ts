import Resource from "../../model/schema/resources/Resource";
import UIDService from "../UIDService";
import IFactory from "./IFactory";

export default class ResourceFactory implements IFactory{
    constructor(private _uidService:UIDService){
        this.fromData = this.fromData.bind(this);
    }

    fromData(obj:any):Resource{
        return new Resource(this._uidService.createUID("resources",obj.id), obj.name);
    }
}