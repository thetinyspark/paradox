"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_const_1 = require("../ioc/app.const");
/**
 * Returns a city by its id if exists
 *
 * example.ts
 * ```typescript
 * Paradox.engine.getFacade().query(Paradox.appConstants.GET_CITY_QUERY, {id:1}).then( (city)=>{});
 * ```
 */
class GetCityQuery {
    execute(notification) {
        const facade = notification.getEmitter();
        const proxy = facade.getProxy(app_const_1.default.CITY_REPOSITORY);
        const payload = notification.getPayload();
        return proxy.getOneBy('id', payload.id);
    }
}
exports.default = GetCityQuery;
