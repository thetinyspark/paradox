"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_const_1 = require("../ioc/app.const");
const Quantity_1 = require("../model/schema/resources/Quantity");
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
    async execute(notification) {
        const facade = notification.getEmitter();
        const data = notification.getPayload();
        const cityRepo = facade.getProxy(app_const_1.default.CITY_REPOSITORY);
        const city = cityRepo.getOneBy('id', data.cityID);
        if (city === null)
            return false;
        const target = city.buildings.find(b => b.id === data.id) || null;
        if (target === null)
            return false;
        target.level.sold.get().forEach((quantity) => {
            const wallet = city.wallet.get();
            const eq = wallet.find(q => q.resourceID === quantity.resourceID) || new Quantity_1.default(quantity.resourceID, 0);
            wallet.splice(wallet.findIndex(q => q.resourceID === quantity.resourceID, 1));
            eq.amount += quantity.amount;
            // eq.add(quantity.amount);
            wallet.push(eq);
            city.wallet.set(wallet);
        });
        await facade.query(app_const_1.default.REMOVE_BUILDING_FROM_CITY, data);
        return true;
    }
}
exports.default = SellBuildingCommand;
