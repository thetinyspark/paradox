"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_const_1 = require("../ioc/app.const");
/**
 * Restores game data
 *
 * example.ts
 * ```typescript
 * const cities             = [... cities data];
 * const resources          = [... resources data];
 * const templateBuildings  = [... templates data];
 * const data =  {cities resources, templateBuildings};
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.RESTORE_SAVED_DATA, data);
 * ```
 */
class RestoreSavedDataCommand {
    execute(notification) {
        const facade = notification.getEmitter();
        const configuration = notification.getPayload();
        facade.sendNotification(app_const_1.default.CREATE_RESOURCES, configuration.resources);
        facade.sendNotification(app_const_1.default.CREATE_TEMPLATE_BUILDINGS, configuration.templateBuildings);
        facade.sendNotification(app_const_1.default.CREATE_CITIES, configuration.cities);
    }
}
exports.default = RestoreSavedDataCommand;
