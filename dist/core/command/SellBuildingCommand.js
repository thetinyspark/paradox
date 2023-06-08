"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_const_1 = require("../ioc/app.const");
/**
 * Sells a building with a specific id and remove it from a city (it if exists)
 *
 * example.ts
 * ```typescript
 * const data = {cityID:1, id:1};
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.SELL_BUILDING, data);
 * ```
 */
var SellBuildingCommand = /** @class */ (function () {
    function SellBuildingCommand() {
    }
    SellBuildingCommand.prototype.execute = function (notification) {
        var facade = notification.getEmitter();
        var data = notification.getPayload();
        var cityRepo = facade.getProxy(app_const_1.default.CITY_REPOSITORY);
        var city = cityRepo.getOneBy('id', data.cityID);
        var target = city.buildings.find(function (b) { return b.id === data.id; }) || null;
        if (!city.buildings.includes(target))
            return;
        target.level.sold.get().forEach(function (quantity) {
            var wallet = city.wallet.get();
            var eq = wallet.find(function (q) { return q.resourceID === quantity.resourceID; });
            if (!eq)
                wallet.push(quantity.clone());
            else
                eq.amount += quantity.amount;
            city.wallet.set(wallet);
        });
        facade.sendNotification(app_const_1.default.REMOVE_BUILDING_FROM_CITY, data);
    };
    return SellBuildingCommand;
}());
exports.default = SellBuildingCommand;
