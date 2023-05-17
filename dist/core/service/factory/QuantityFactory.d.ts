import Repository from "../../model/repository/Repository";
import Quantity from "../../model/schema/resources/Quantity";
import Resource from "../../model/schema/resources/Resource";
import IFactory from "./IFactory";
export default class QuantityFactory implements IFactory {
    private _resourceRepository;
    constructor(_resourceRepository: Repository<Resource>);
    fromData(obj: any): Quantity;
}
