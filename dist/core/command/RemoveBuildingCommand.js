"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_const_1 = require("../ioc/app.const");
/**
 * Removes a building with a specific id from a city (it if exists)
 *
 * example.ts
 * ```typescript
 * const data = {cityID: 1, id:1};
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.REMOVE_BUILDING_FROM_CITY, data);
 * ```
 */
class RemoveBuildingCommand {
    execute(notification) {
        const facade = notification.getEmitter();
        const data = notification.getPayload();
        const cityRepo = facade.getProxy(app_const_1.default.CITY_REPOSITORY);
        const city = cityRepo.getOneBy('id', data.cityID);
        if (city === null)
            return false;
        const target = city.buildings.find(b => b.id === data.id) || null;
        if (!city.buildings.includes(target))
            return false;
        const pos = city.buildings.indexOf(target);
        city.buildings.splice(pos, 1);
        return pos > -1;
    }
}
exports.default = RemoveBuildingCommand;
