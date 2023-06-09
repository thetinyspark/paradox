import Resource from "../../model/schema/resources/Resource";
import UIDService from "../UIDService";
import IFactory from "./IFactory";
export default class ResourceFactory implements IFactory {
    private _uidService;
    constructor(_uidService: UIDService);
    fromData(obj: any): Resource;
}
