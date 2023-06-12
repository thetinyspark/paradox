"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_const_1 = require("../ioc/app.const");
/**
 * Returns all resources
 *
 * example.ts
 * ```typescript
 * Paradox.engine.getFacade().query(Paradox.appConstants.GET_RESOURCES_QUERY).then( (resources)=>{});
 * ```
 */
class GetResourcesQuery {
    execute(notification) {
        const facade = notification.getEmitter();
        const proxy = facade.getProxy(app_const_1.default.RESOURCE_REPOSITORY);
        return proxy.getAll();
    }
}
exports.default = GetResourcesQuery;
