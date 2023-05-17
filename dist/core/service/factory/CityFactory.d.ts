import City from "../../model/schema/city/City";
import IFactory from "./IFactory";
export default class CityFactory implements IFactory {
    private _buildingFactory;
    private _quantityListFactory;
    constructor(_buildingFactory: IFactory, _quantityListFactory: IFactory);
    fromData(obj: any): City;
}
