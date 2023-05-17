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
var DoCycleCommand = /** @class */ (function () {
    function DoCycleCommand() {
    }
    DoCycleCommand.prototype.execute = function (notification) {
        var facade = notification.getEmitter();
        var proxy = facade.getProxy(app_const_1.default.CITY_REPOSITORY);
        proxy.getAll().forEach(function (city) {
            city.buildings.forEach(function (building) {
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
        });
    };
    return DoCycleCommand;
}());
exports.default = DoCycleCommand;
