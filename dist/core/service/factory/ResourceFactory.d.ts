import Resource from "../../model/schema/resources/Resource";
import IFactory from "./IFactory";
export default class ResourceFactory implements IFactory {
    constructor();
    fromData(obj: any): Resource;
}
