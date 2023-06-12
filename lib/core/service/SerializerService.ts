import City from "../model/schema/city/City";
import Resource from "../model/schema/resources/Resource";
import Quantity from "../model/schema/resources/Quantity";
import QuantityList from "../model/schema/resources/QuantityList";
import BuildingLevel from "../model/schema/building/BuildingLevel";
import TemplateBuilding from "../model/schema/building/TemplateBuilding";
import Building from "../model/schema/building/Building";
import ISerializerService from "./ISerializerService";

export default class SerializerService implements ISerializerService{

    serialize(
        cities:City[], 
        templates:TemplateBuilding[], 
        resources: Resource[], 
        format:string = "raw"
    ){
        if( format === "json")
            return JSON.stringify(this.convertToObj(cities,templates,resources));
        else
            return this.convertToObj(cities,templates,resources);
    }

    convertToObj(
        cities:City[], 
        templates:TemplateBuilding[], 
        resources: Resource[]
    ):any{
        return {
            cities: cities.map( (c)=>this.cityToObject(c)), 
            templateBuildings: templates.map(t => this.templateBuildingToObject(t)), 
            resources: resources.map( r=>this.resourceToObject(r))
        };
    }

    resourceToObject(resource:Resource):any{
        return {id:resource.id, name:resource.name};
    }

    quantityToObject(quantity:Quantity):any{
        return {resourceID: quantity.resourceID, amount: quantity.amount };
    }

    quantityListToObject( quantityList:QuantityList ):any[]{
        return quantityList.get().map(this.quantityToObject );
    }

    buildingLevelToObject( buildingLevel:BuildingLevel ):any{
        return {
            level: buildingLevel.level, 
            cost: this.quantityListToObject(buildingLevel.cost),
            prod: this.quantityListToObject(buildingLevel.prod),
            cons: this.quantityListToObject(buildingLevel.cons),
            sold: this.quantityListToObject(buildingLevel.sold),
        };
    }

    templateBuildingToObject( tplBuilding:TemplateBuilding ):any{
        return {
            id: tplBuilding.id, 
            name: tplBuilding.name, 
            levels: tplBuilding.levels.map( (l)=>this.buildingLevelToObject(l))
        };
    }

    buildingToObject( building:Building ):any{
        return {
            tplID: building.tplBuildingID,
            level: building.level.level,
            id: building.id, 
            frozen: building.frozen
        }
    }

    cityToObject( city:City ):any{
        return {
            id: city.id,
            name: city.name, 
            wallet: this.quantityListToObject(city.wallet),
            buildings: city.buildings.map( b => this.buildingToObject(b))
        };
    }
}