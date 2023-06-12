"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_const_1 = require("../ioc/app.const");
/**
 * Removes city
 *
 * example.ts
 * ```typescript
 * const data = {id:1};
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.REMOVE_CITY, data)
 * ```
 */
class RemoveCityCommand {
    execute(notification) {
        const facade = notification.getEmitter();
        const data = notification.getPayload();
        const proxy = facade.getProxy(app_const_1.default.CITY_REPOSITORY);
        const factory = facade.getService(app_const_1.default.CITY_FACTORY);
        proxy.remove(proxy.getOneBy('id', data.id));
    }
}
exports.default = RemoveCityCommand;
