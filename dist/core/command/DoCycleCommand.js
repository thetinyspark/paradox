"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_const_1 = require("../ioc/app.const");
/**
 * Processes a cycle. A cycle means that productions are added
 * to cities's wallets and consumptions are removed from them too.
 *
 * example.ts
 * ```typescript
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.DO_CYCLE);
 * ```
 */
var DoCycleCommand = /** @class */ (function () {
    function DoCycleCommand() {
    }
    DoCycleCommand.prototype.execute = function (notification) {
        var facade = notification.getEmitter();
        var proxy = facade.getProxy(app_const_1.default.CITY_REPOSITORY);
        proxy.getAll().forEach(function (city) {
            // production
            city.buildings.forEach(function (building) {
                if (building.level === null)
                    return;
                building.level.prod.get().forEach(function (prod) {
                    var cityQuantity = city.wallet.get().find(function (q) { return q.resourceID === prod.resourceID; }) || null;
                    if (cityQuantity === null) {
                        city.wallet.set(__spreadArray(__spreadArray([], city.wallet.get(), true), [
                            prod.clone()
                        ], false));
                    }
                    else {
                        cityQuantity.amount += prod.amount;
                    }
                });
            });
            // maintenance
            city.buildings.forEach(function (building) {
                if (building.level === null)
                    return;
                building.level.cons.get().forEach(function (cons) {
                    var cityQuantity = city.wallet.get().find(function (q) { return q.resourceID === cons.resourceID; }) || null;
                    if (cityQuantity === null) {
                        var empty = cons.clone();
                        empty.amount = 0;
                        city.wallet.set(__spreadArray(__spreadArray([], city.wallet.get(), true), [empty], false));
                    }
                    cityQuantity.amount -= cons.amount;
                });
            });
        });
    };
    return DoCycleCommand;
}());
exports.default = DoCycleCommand;
