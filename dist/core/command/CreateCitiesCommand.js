"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_const_1 = require("../ioc/app.const");
/**
 * Create cities
 *
 * example.ts
 * ```typescript
 * const city1 = {id: 1, name: "city1", buildings:[{tplID:1, level:1}],wallet: [{resourceID: 1, amount: 100}]};
 * const city2 = {id: 2, name: "city2", buildings:[{tplID:2, level:1}],wallet: [{resourceID: 2, amount: 100}]};
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.CREATE_CITIES, [city1, city2]);
 * ```
 */
class CreateCitiesCommand {
    execute(notification) {
        const facade = notification.getEmitter();
        const list = notification.getPayload();
        const proxy = facade.getProxy(app_const_1.default.CITY_REPOSITORY);
        const factory = facade.getService(app_const_1.default.CITY_FACTORY);
        list.forEach((current) => {
            proxy.add(factory.fromData(current));
        });
    }
}
exports.default = CreateCitiesCommand;
