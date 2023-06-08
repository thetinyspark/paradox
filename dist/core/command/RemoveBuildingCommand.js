"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_const_1 = require("../ioc/app.const");
/**
 * Removes a building with a specific id from a city (it if exists)
 *
 * example.ts
 * ```typescript
 * const data = {cityID: 1, id:1};
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.REMOVE_BUILDING_FROM_CITY, data);
 * ```
 */
var RemoveBuildingCommand = /** @class */ (function () {
    function RemoveBuildingCommand() {
    }
    RemoveBuildingCommand.prototype.execute = function (notification) {
        var facade = notification.getEmitter();
        var data = notification.getPayload();
        var cityRepo = facade.getProxy(app_const_1.default.CITY_REPOSITORY);
        var city = cityRepo.getOneBy('id', data.cityID);
        var target = city.buildings.find(function (b) { return b.id === data.id; }) || null;
        if (!city.buildings.includes(target))
            return;
        var pos = city.buildings.indexOf(target);
        city.buildings.splice(pos, 1);
        city.buildings.forEach(function (building, index) {
            building.id = index;
        });
    };
    return RemoveBuildingCommand;
}());
exports.default = RemoveBuildingCommand;
