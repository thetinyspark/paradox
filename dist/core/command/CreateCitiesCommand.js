"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_const_1 = require("../ioc/app.const");
/**
 * Create cities
 *
 * example.ts
 * ```typescript
 * const city1 = {id: 1, name: "city1", buildings:[{tplID:1, level:1}],wallet: [{resourceID: 1, amount: 100}]};
 * const city2 = {id: 2, name: "city2", buildings:[{tplID:2, level:1}],wallet: [{resourceID: 2, amount: 100}]};
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.CREATE_CITIES, [city1, city2]);
 * ```
 */
var CreateCitiesCommand = /** @class */ (function () {
    function CreateCitiesCommand() {
    }
    CreateCitiesCommand.prototype.execute = function (notification) {
        var facade = notification.getEmitter();
        var list = notification.getPayload();
        var proxy = facade.getProxy(app_const_1.default.CITY_REPOSITORY);
        var factory = facade.getService(app_const_1.default.CITY_FACTORY);
        list.forEach(function (current) {
            proxy.add(factory.fromData(current));
        });
    };
    return CreateCitiesCommand;
}());
exports.default = CreateCitiesCommand;
