"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_const_1 = require("../ioc/app.const");
/**
 * Sells a building with a specific id and remove it from a city (it if exists)
 *
 * example.ts
 * ```typescript
 * const data = {cityID:1, id:1};
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.SELL_BUILDING, data);
 * ```
 */
class SellBuildingCommand {
    execute(notification) {
        const facade = notification.getEmitter();
        const data = notification.getPayload();
        const cityRepo = facade.getProxy(app_const_1.default.CITY_REPOSITORY);
        const city = cityRepo.getOneBy('id', data.cityID);
        if (city === null)
            return;
        const target = city.buildings.find(b => b.id === data.id) || null;
        if (!city.buildings.includes(target))
            return;
        target.level.sold.get().forEach((quantity) => {
            const wallet = city.wallet.get();
            const eq = wallet.find(q => q.resourceID === quantity.resourceID);
            if (!eq)
                wallet.push(quantity.clone());
            else
                eq.amount += quantity.amount;
            city.wallet.set(wallet);
        });
        facade.sendNotification(app_const_1.default.REMOVE_BUILDING_FROM_CITY, data);
    }
}
exports.default = SellBuildingCommand;
