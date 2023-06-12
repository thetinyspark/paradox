import IRepository from "../../model/repository/IRepository";
import Quantity from "../../model/schema/resources/Quantity";
import Resource from "../../model/schema/resources/Resource";
import IFactory from "./IFactory";
export default class QuantityFactory implements IFactory {
    private _resourceIRepository;
    constructor(_resourceIRepository: IRepository<Resource>);
    fromData(obj: any): Quantity;
}
