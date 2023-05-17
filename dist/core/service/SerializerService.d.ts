import City from "../model/schema/city/City";
import Resource from "../model/schema/resources/Resource";
import Quantity from "../model/schema/resources/Quantity";
import QuantityList from "../model/schema/resources/QuantityList";
import BuildingLevel from "../model/schema/building/BuildingLevel";
import TemplateBuilding from "../model/schema/building/TemplateBuilding";
import Building from "../model/schema/building/Building";
export default class SerializerService {
    serialize(cities: City[], templates: TemplateBuilding[], resources: Resource[], format?: string): any;
    convertToObj(cities: City[], templates: TemplateBuilding[], resources: Resource[]): any;
    resourceToObject(resource: Resource): any;
    quantityToObject(quantity: Quantity): any;
    quantityListToObject(quantityList: QuantityList): any[];
    buildingLevelToObject(buildingLevel: BuildingLevel): any;
    templateBuildingToObject(tplBuilding: TemplateBuilding): any;
    buildingToObject(building: Building): any;
    cityToObject(city: City): any;
}
