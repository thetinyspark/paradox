"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_const_1 = require("../ioc/app.const");
var AddCityCommand = /** @class */ (function () {
    function AddCityCommand() {
    }
    AddCityCommand.prototype.execute = function (notification) {
        var facade = notification.getEmitter();
        var data = notification.getPayload();
        var proxy = facade.getProxy(app_const_1.default.CITY_REPOSITORY);
        var factory = facade.getService(app_const_1.default.CITY_FACTORY);
        proxy.add(factory.fromData(data));
    };
    return AddCityCommand;
}());
exports.default = AddCityCommand;
