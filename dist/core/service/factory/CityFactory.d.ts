import City from "../../model/schema/city/City";
import UIDService from "../UIDService";
import IFactory from "./IFactory";
export default class CityFactory implements IFactory {
    private _buildingFactory;
    private _quantityListFactory;
    private _uidService;
    constructor(_buildingFactory: IFactory, _quantityListFactory: IFactory, _uidService: UIDService);
    fromData(obj: any): City;
}
