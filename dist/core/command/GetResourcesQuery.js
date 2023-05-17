"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_const_1 = require("../ioc/app.const");
var GetResourcesQuery = /** @class */ (function () {
    function GetResourcesQuery() {
    }
    GetResourcesQuery.prototype.execute = function (notification) {
        var facade = notification.getEmitter();
        var proxy = facade.getProxy(app_const_1.default.RESOURCE_REPOSITORY);
        return proxy.getAll();
    };
    return GetResourcesQuery;
}());
exports.default = GetResourcesQuery;
