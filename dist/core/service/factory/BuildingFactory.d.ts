import Repository from "../../model/repository/Repository";
import Building from "../../model/schema/building/Building";
import TemplateBuilding from "../../model/schema/building/TemplateBuilding";
import UIDService from "../UIDService";
import IFactory from "./IFactory";
export default class BuildingFactory implements IFactory {
    private _repo;
    private _uidService;
    constructor(_repo: Repository<TemplateBuilding>, _uidService: UIDService);
    fromData(obj: any): Building;
}
