"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_const_1 = require("../ioc/app.const");
/**
 * Returns all building's templates
 *
 * example.ts
 * ```typescript
 * Paradox.engine.getFacade().query(Paradox.appConstants.GET_TEMPLATES_BUILDINGS_QUERY).then( (templates)=>{});
 * ```
 */
var GetTemplateBuildingsQuery = /** @class */ (function () {
    function GetTemplateBuildingsQuery() {
    }
    GetTemplateBuildingsQuery.prototype.execute = function (notification) {
        var facade = notification.getEmitter();
        var proxy = facade.getProxy(app_const_1.default.TEMPLATE_BUILDING_REPOSITORY);
        return proxy.getAll();
    };
    return GetTemplateBuildingsQuery;
}());
exports.default = GetTemplateBuildingsQuery;
