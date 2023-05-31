"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_const_1 = require("../ioc/app.const");
var BuyBuildingCommand = /** @class */ (function () {
    function BuyBuildingCommand() {
    }
    BuyBuildingCommand.prototype.execute = function (notification) {
        var facade = notification.getEmitter();
        var data = notification.getPayload();
        var cityRepo = facade.getProxy(app_const_1.default.CITY_REPOSITORY);
        var tplRepo = facade.getProxy(app_const_1.default.TEMPLATE_BUILDING_REPOSITORY);
        var tpl = tplRepo.getOneBy('id', data.tplID);
        var city = cityRepo.getOneBy('id', data.cityID);
        if (tpl === null || city === null)
            return;
        var factory = facade.getService(app_const_1.default.BUILDING_FACTORY);
        // building is free
        if (tpl.levels.length === 0 || data.freely) {
            var id = city.buildings.length;
            city.buildings.push(factory.fromData({ tplID: tpl.id, id: id }));
            return;
        }
        var cost = tpl.levels[0].cost;
        var wallet = city.wallet;
        var paymentService = facade.getService(app_const_1.default.PAYMENT_SERVICE);
        if (paymentService.pay(wallet, cost)) {
            var id = city.buildings.length;
            city.buildings.push(factory.fromData({ tplID: tpl.id, id: id }));
        }
    };
    return BuyBuildingCommand;
}());
exports.default = BuyBuildingCommand;
