"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_const_1 = require("../ioc/app.const");
/**
 * Buys and adds a building to a city if city has enough resources
 *
 * example.ts
 * ```typescript
 * const data = {cityID: 1, tplID: 1};
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.BUY_BUILDING, data);
 * ```
 */
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
            city.buildings.push(factory.fromData({ tplID: tpl.id }));
            return;
        }
        var cost = tpl.levels[0].cost;
        var wallet = city.wallet;
        var paymentService = facade.getService(app_const_1.default.PAYMENT_SERVICE);
        if (paymentService.pay(wallet, cost)) {
            city.buildings.push(factory.fromData({ tplID: tpl.id }));
        }
    };
    return BuyBuildingCommand;
}());
exports.default = BuyBuildingCommand;
