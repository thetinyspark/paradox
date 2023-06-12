import TemplateBuilding from "../../model/schema/building/TemplateBuilding";
import IUIDService from "../IUIDService";
import IFactory from "./IFactory";
export default class TemplateBuildingFactory implements IFactory {
    private _levelFactory;
    private _uidService;
    constructor(_levelFactory: IFactory, _uidService: IUIDService);
    fromData(obj: any): TemplateBuilding;
}
