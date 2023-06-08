"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_const_1 = require("../ioc/app.const");
/**
 * Adds a building to a city
 *
 * example.ts
 * ```typescript
 * const data = {cityID: 1, tplID: 1};
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.ADD_BUILDING_TO_CITY, data);
 * ```
 */
var AddBuildingToCityCommand = /** @class */ (function () {
    function AddBuildingToCityCommand() {
    }
    AddBuildingToCityCommand.prototype.execute = function (notification) {
        var facade = notification.getEmitter();
        var data = notification.getPayload();
        var tplRepo = facade.getProxy(app_const_1.default.TEMPLATE_BUILDING_REPOSITORY);
        var cityRepo = facade.getProxy(app_const_1.default.CITY_REPOSITORY);
        var tpl = tplRepo.getOneBy('id', data.tplID);
        var city = cityRepo.getOneBy('id', data.cityID);
        if (tpl === null || city === null)
            return;
        var factory = facade.getService(app_const_1.default.BUILDING_FACTORY);
        city.buildings.push(factory.fromData({ tplID: tpl.id }));
    };
    return AddBuildingToCityCommand;
}());
exports.default = AddBuildingToCityCommand;
