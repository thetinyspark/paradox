import Resource from "../../model/schema/resources/Resource";
import IUIDService from "../IUIDService";
import IFactory from "./IFactory";
export default class ResourceFactory implements IFactory {
    private _uidService;
    constructor(_uidService: IUIDService);
    fromData(obj: any): Resource;
}
