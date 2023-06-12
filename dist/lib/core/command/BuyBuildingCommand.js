"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_const_1 = require("../ioc/app.const");
/**
 * Buys and adds a building to a city if city has enough resources
 *
 * example.ts
 * ```typescript
 * const data = {cityID: 1, tplID: 1};
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.BUY_BUILDING, data);
 * ```
 */
class BuyBuildingCommand {
    execute(notification) {
        const facade = notification.getEmitter();
        const data = notification.getPayload();
        const cityRepo = facade.getProxy(app_const_1.default.CITY_REPOSITORY);
        const tplRepo = facade.getProxy(app_const_1.default.TEMPLATE_BUILDING_REPOSITORY);
        const tpl = tplRepo.getOneBy('id', data.tplID);
        const city = cityRepo.getOneBy('id', data.cityID);
        if (tpl === null || city === null)
            return;
        const factory = facade.getService(app_const_1.default.BUILDING_FACTORY);
        // building is free
        if (tpl.levels.length === 0 || data.freely) {
            city.buildings.push(factory.fromData({ tplID: tpl.id }));
            return;
        }
        const cost = tpl.levels[0].cost;
        const wallet = city.wallet;
        const paymentService = facade.getService(app_const_1.default.PAYMENT_SERVICE);
        if (paymentService.pay(wallet, cost)) {
            city.buildings.push(factory.fromData({ tplID: tpl.id }));
        }
    }
}
exports.default = BuyBuildingCommand;
