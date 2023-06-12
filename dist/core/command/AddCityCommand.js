"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_const_1 = require("../ioc/app.const");
/**
 * Adds city
 *
 * example.ts
 * ```typescript
 * const cityData = {
        id: 1,
        name: "Atlantis",
        buildings:[{tplID:1, level:2}],
        wallet: [{resourceID: 1, amount: 100}]
    };
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.ADD_CITY, cityData)
 * ```
 */
class AddCityCommand {
    execute(notification) {
        const facade = notification.getEmitter();
        const data = notification.getPayload();
        const proxy = facade.getProxy(app_const_1.default.CITY_REPOSITORY);
        const factory = facade.getService(app_const_1.default.CITY_FACTORY);
        proxy.add(factory.fromData(data));
    }
}
exports.default = AddCityCommand;
