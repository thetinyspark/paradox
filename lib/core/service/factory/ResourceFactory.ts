import Resource from "../../model/schema/resources/Resource";
import IFactory from "./IFactory";

export default class ResourceFactory implements IFactory{
    constructor(){
        this.fromData = this.fromData.bind(this);
    }

    fromData(obj:any):Resource{
        return new Resource(obj.id, obj.name);
    }
}