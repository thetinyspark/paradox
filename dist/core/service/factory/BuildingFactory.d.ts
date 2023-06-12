import IRepository from "../../model/repository/IRepository";
import Building from "../../model/schema/building/Building";
import TemplateBuilding from "../../model/schema/building/TemplateBuilding";
import IUIDService from "../IUIDService";
import IFactory from "./IFactory";
export default class BuildingFactory implements IFactory {
    private _repo;
    private _uidService;
    constructor(_repo: IRepository<TemplateBuilding>, _uidService: IUIDService);
    fromData(obj: any): Building;
}
