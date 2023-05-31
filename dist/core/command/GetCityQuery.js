"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_const_1 = require("../ioc/app.const");
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
