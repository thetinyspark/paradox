import Repository from "../../model/repository/Repository";
import Building from "../../model/schema/building/Building";
import TemplateBuilding from "../../model/schema/building/TemplateBuilding";
import IFactory from "./IFactory";
export default class BuildingFactory implements IFactory {
    private _repo;
    constructor(_repo: Repository<TemplateBuilding>);
    fromData(obj: any): Building;
}
