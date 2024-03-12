"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_const_1 = require("../ioc/app.const");
/**
 * Downgrades a building with a specific id (it if exists) by a certain minus
 * Removes building if minus is too strong
 *
 * example.ts
 * ```typescript
 * const data = {cityID: 1, id:1, minus: 1};
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.DOWNGRADE_BUILDING, data);
 * ```
 */
class DowngradeBuildingCommand {
    execute(notification) {
        const facade = notification.getEmitter();
        const data = notification.getPayload();
        const minus = data.minus || 1;
        const tplRepo = facade.getProxy(app_const_1.default.TEMPLATE_BUILDING_REPOSITORY);
        const cityRepo = facade.getProxy(app_const_1.default.CITY_REPOSITORY);
        const city = cityRepo.getOneBy('id', data.cityID) || null;
        if (city === null)
            return false;
        const target = city.buildings.find(b => b.id === data.id) || null;
        const tplID = target === null ? -1 : target.tplBuildingID;
        const tpl = tplRepo.getOneBy('id', tplID);
        if (tpl === null || target === null)
            return false;
        const prevLevel = tpl.levels.find(l => l.level === target.level.level - minus) || null;
        if (prevLevel === null) {
            city.buildings.splice(city.buildings.indexOf(target), 1);
            return true;
        }
        target.level = prevLevel.clone();
        return true;
    }
}
exports.default = DowngradeBuildingCommand;
