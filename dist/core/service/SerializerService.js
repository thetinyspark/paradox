"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SerializerService = /** @class */ (function () {
    function SerializerService() {
    }
    SerializerService.prototype.serialize = function (cities, templates, resources, format) {
        if (format === void 0) { format = "raw"; }
        if (format === "json")
            return JSON.stringify(this.convertToObj(cities, templates, resources));
        else
            return this.convertToObj(cities, templates, resources);
    };
    SerializerService.prototype.convertToObj = function (cities, templates, resources) {
        var _this = this;
        return {
            cities: cities.map(function (c) { return _this.cityToObject(c); }),
            templateBuildings: templates.map(function (t) { return _this.templateBuildingToObject(t); }),
            resources: resources.map(function (r) { return _this.resourceToObject(r); })
        };
    };
    SerializerService.prototype.resourceToObject = function (resource) {
        return { id: resource.id, name: resource.name };
    };
    SerializerService.prototype.quantityToObject = function (quantity) {
        return { resourceID: quantity.resourceID, amount: quantity.amount };
    };
    SerializerService.prototype.quantityListToObject = function (quantityList) {
        return quantityList.get().map(this.quantityToObject);
    };
    SerializerService.prototype.buildingLevelToObject = function (buildingLevel) {
        return {
            level: buildingLevel.level,
            cost: this.quantityListToObject(buildingLevel.cost),
            prod: this.quantityListToObject(buildingLevel.prod),
        };
    };
    SerializerService.prototype.templateBuildingToObject = function (tplBuilding) {
        var _this = this;
        return {
            id: tplBuilding.id,
            name: tplBuilding.name,
            levels: tplBuilding.levels.map(function (l) { return _this.buildingLevelToObject(l); })
        };
    };
    SerializerService.prototype.buildingToObject = function (building) {
        return {
            tplID: building.tplBuildingID,
            level: building.level.level,
        };
    };
    SerializerService.prototype.cityToObject = function (city) {
        var _this = this;
        return {
            id: city.id,
            name: city.name,
            wallet: this.quantityListToObject(city.wallet),
            buildings: city.buildings.map(function (b) { return _this.buildingToObject(b); })
        };
    };
    return SerializerService;
}());
exports.default = SerializerService;
