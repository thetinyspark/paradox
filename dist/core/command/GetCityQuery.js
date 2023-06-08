"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_const_1 = require("../ioc/app.const");
/**
 * Returns a city by its id if exists
 *
 * example.ts
 * ```typescript
 * Paradox.engine.getFacade().query(Paradox.appConstants.GET_CITY_QUERY, {id:1}).then( (city)=>{});
 * ```
 */
var GetCityQuery = /** @class */ (function () {
    function GetCityQuery() {
    }
    GetCityQuery.prototype.execute = function (notification) {
        var facade = notification.getEmitter();
        var proxy = facade.getProxy(app_const_1.default.CITY_REPOSITORY);
        var payload = notification.getPayload();
        return proxy.getOneBy('id', payload.id);
    };
    return GetCityQuery;
}());
exports.default = GetCityQuery;
