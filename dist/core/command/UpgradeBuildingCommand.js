"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_const_1 = require("../ioc/app.const");
/**
 * Upgrades a building with a specific id (it if exists)
 *
 * example.ts
 * ```typescript
 * const data = {cityID: 1, id:1};
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.UPGRADE_BUILDING, data);
 * ```
 */
class UpgradeBuildingCommand {
    execute(notification) {
        const facade = notification.getEmitter();
        const data = notification.getPayload();
        const tplRepo = facade.getProxy(app_const_1.default.TEMPLATE_BUILDING_REPOSITORY);
        const cityRepo = facade.getProxy(app_const_1.default.CITY_REPOSITORY);
        const city = cityRepo.getOneBy('id', data.cityID);
        const target = city.buildings.find(b => b.id === data.id) || null;
        const tplID = target === null ? -1 : target.tplBuildingID;
        const tpl = tplRepo.getOneBy('id', tplID);
        if (tpl === null || city === null || target === null)
            return;
        if (!city.buildings.includes(target))
            return;
        const nextLevel = tpl.levels.find(l => l.level === target.level.level + 1) || null;
        if (nextLevel === null)
            return;
        if (data.freely === true) {
            target.level = nextLevel.clone();
            return;
        }
        const cost = nextLevel.cost;
        const wallet = city.wallet;
        const IPaymentService = facade.getService(app_const_1.default.PAYMENT_SERVICE);
        if (IPaymentService.pay(wallet, cost)) {
            target.level = nextLevel.clone();
        }
    }
}
exports.default = UpgradeBuildingCommand;
