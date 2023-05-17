import TemplateBuilding from "../../model/schema/building/TemplateBuilding";
import IFactory from "./IFactory";
export default class TemplateBuildingFactory implements IFactory {
    private _levelFactory;
    constructor(_levelFactory: IFactory);
    fromData(obj: any): TemplateBuilding;
}
