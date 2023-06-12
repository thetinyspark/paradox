import BuildingLevel from "../../model/schema/building/BuildingLevel";
import IFactory from "./IFactory";
export default class BuildingLevelFactory implements IFactory {
    private _quantityListFactory;
    constructor(_quantityListFactory: IFactory);
    fromData(obj: any): BuildingLevel;
}
