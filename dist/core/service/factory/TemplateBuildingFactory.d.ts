import TemplateBuilding from "../../model/schema/building/TemplateBuilding";
import UIDService from "../UIDService";
import IFactory from "./IFactory";
export default class TemplateBuildingFactory implements IFactory {
    private _levelFactory;
    private _uidService;
    constructor(_levelFactory: IFactory, _uidService: UIDService);
    fromData(obj: any): TemplateBuilding;
}
