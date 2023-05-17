import QuantityList from "../../model/schema/resources/QuantityList";
import IFactory from "./IFactory";
export default class QuantityListFactory implements IFactory {
    private _quantityFactory;
    constructor(_quantityFactory: IFactory);
    fromData(obj: any[]): QuantityList;
}
