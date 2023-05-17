"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_const_1 = require("../ioc/app.const");
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
