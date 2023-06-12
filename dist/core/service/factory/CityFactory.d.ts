import City from "../../model/schema/city/City";
import IUIDService from "../IUIDService";
import IFactory from "./IFactory";
export default class CityFactory implements IFactory {
    private _buildingFactory;
    private _quantityListFactory;
    private _uidService;
    constructor(_buildingFactory: IFactory, _quantityListFactory: IFactory, _uidService: IUIDService);
    fromData(obj: any): City;
}
