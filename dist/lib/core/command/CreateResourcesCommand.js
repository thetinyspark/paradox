"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_const_1 = require("../ioc/app.const");
/**
 * Create resources
 *
 * example.ts
 * ```typescript
 * const resources = [{id:1, name: "gold"},{id:2, name: "wood"},{id:3, name: "food"}];
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.CREATE_RESOURCES, resources);
 * ```
 */
class CreateResourcesCommand {
    execute(notification) {
        const facade = notification.getEmitter();
        const list = notification.getPayload();
        const proxy = facade.getProxy(app_const_1.default.RESOURCE_REPOSITORY);
        const factory = facade.getService(app_const_1.default.RESOURCE_FACTORY);
        list.forEach((current) => {
            proxy.add(factory.fromData(current));
        });
    }
}
exports.default = CreateResourcesCommand;
