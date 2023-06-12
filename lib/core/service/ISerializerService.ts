import Building from "../model/schema/building/Building";
import BuildingLevel from "../model/schema/building/BuildingLevel";
import TemplateBuilding from "../model/schema/building/TemplateBuilding";
import City from "../model/schema/city/City";
import Quantity from "../model/schema/resources/Quantity";
import QuantityList from "../model/schema/resources/QuantityList";
import Resource from "../model/schema/resources/Resource";

export default interface ISerializerService{
    serialize(cities:City[], templates:TemplateBuilding[],resources: Resource[], format:string);
    convertToObj(cities:City[], templates:TemplateBuilding[], resources: Resource[]):any;
    resourceToObject(resource:Resource):any;
    quantityToObject(quantity:Quantity):any;
    quantityListToObject( quantityList:QuantityList ):any[];
    buildingLevelToObject( buildingLevel:BuildingLevel ):any;
    templateBuildingToObject( tplBuilding:TemplateBuilding ):any;
    buildingToObject( building:Building ):any;
    cityToObject( city:City ):any;
}