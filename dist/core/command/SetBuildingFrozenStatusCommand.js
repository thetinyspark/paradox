"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_const_1 = require("../ioc/app.const");
/**
 * Sets a building frozen status
 * If a building is frozen it doesnot produce nor consume anything
 *
 * example.ts
 * ```typescript
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.SET_BUILDING_FROZEN_STATUS, {id:1, cityID:1, frozen:true});
 * ```
 */
class SetBuildingFrozenStatusCommand {
    execute(notification) {
        const facade = notification.getEmitter();
        const data = notification.getPayload();
        const cityRepo = facade.getProxy(app_const_1.default.CITY_REPOSITORY);
        const city = cityRepo.getOneBy('id', data.cityID) || null;
        if (city === null)
            return false;
        const target = city.buildings.find(b => b.id === data.id) || null;
        if (target === null)
            return false;
        target.frozen = data.frozen === true;
        return true;
    }
}
exports.default = SetBuildingFrozenStatusCommand;
