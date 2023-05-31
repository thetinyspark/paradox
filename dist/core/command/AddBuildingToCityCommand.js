"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_const_1 = require("../ioc/app.const");
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
        var id = city.buildings.length;
        city.buildings.push(factory.fromData({ tplID: tpl.id, id: id }));
    };
    return AddBuildingToCityCommand;
}());
exports.default = AddBuildingToCityCommand;
