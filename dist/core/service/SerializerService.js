"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SerializerService {
    serialize(cities, templates, resources, format = "raw") {
        if (format === "json")
            return JSON.stringify(this.convertToObj(cities, templates, resources));
        else
            return this.convertToObj(cities, templates, resources);
    }
    convertToObj(cities, templates, resources) {
        return {
            cities: cities.map((c) => this.cityToObject(c)),
            templateBuildings: templates.map(t => this.templateBuildingToObject(t)),
            resources: resources.map(r => this.resourceToObject(r))
        };
    }
    resourceToObject(resource) {
        return { id: resource.id, name: resource.name };
    }
    quantityToObject(quantity) {
        return { resourceID: quantity.resourceID, amount: quantity.amount };
    }
    quantityListToObject(quantityList) {
        return quantityList.get().map(this.quantityToObject);
    }
    buildingLevelToObject(buildingLevel) {
        return {
            level: buildingLevel.level,
            cost: this.quantityListToObject(buildingLevel.cost),
            prod: this.quantityListToObject(buildingLevel.prod),
            cons: this.quantityListToObject(buildingLevel.cons),
            sold: this.quantityListToObject(buildingLevel.sold),
        };
    }
    templateBuildingToObject(tplBuilding) {
        return {
            id: tplBuilding.id,
            name: tplBuilding.name,
            levels: tplBuilding.levels.map((l) => this.buildingLevelToObject(l))
        };
    }
    buildingToObject(building) {
        return {
            tplID: building.tplBuildingID,
            level: building.level.level,
            id: building.id,
            frozen: building.frozen
        };
    }
    cityToObject(city) {
        return {
            id: city.id,
            name: city.name,
            wallet: this.quantityListToObject(city.wallet),
            buildings: city.buildings.map(b => this.buildingToObject(b))
        };
    }
}
exports.default = SerializerService;
