"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_const_1 = require("../ioc/app.const");
/**
 * Returns all the cities
 *
 * example.ts
 * ```typescript
 * Paradox.engine.getFacade().query(Paradox.appConstants.GET_CITIES_QUERY).then( (cities)=>{});
 * ```
 */
var GetCitiesQuery = /** @class */ (function () {
    function GetCitiesQuery() {
    }
    GetCitiesQuery.prototype.execute = function (notification) {
        var facade = notification.getEmitter();
        var proxy = facade.getProxy(app_const_1.default.CITY_REPOSITORY);
        return proxy.getAll();
    };
    return GetCitiesQuery;
}());
exports.default = GetCitiesQuery;
