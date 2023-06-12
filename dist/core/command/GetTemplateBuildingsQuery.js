"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_const_1 = require("../ioc/app.const");
/**
 * Returns all building's templates
 *
 * example.ts
 * ```typescript
 * Paradox.engine.getFacade().query(Paradox.appConstants.GET_TEMPLATES_BUILDINGS_QUERY).then( (templates)=>{});
 * ```
 */
class GetTemplateBuildingsQuery {
    execute(notification) {
        const facade = notification.getEmitter();
        const proxy = facade.getProxy(app_const_1.default.TEMPLATE_BUILDING_REPOSITORY);
        return proxy.getAll();
    }
}
exports.default = GetTemplateBuildingsQuery;
