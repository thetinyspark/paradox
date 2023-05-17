"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_const_1 = require("../ioc/app.const");
var CreateTemplateBuildingsCommand = /** @class */ (function () {
    function CreateTemplateBuildingsCommand() {
    }
    CreateTemplateBuildingsCommand.prototype.execute = function (notification) {
        var facade = notification.getEmitter();
        var list = notification.getPayload();
        var templateProxy = facade.getProxy(app_const_1.default.TEMPLATE_BUILDING_REPOSITORY);
        var factory = facade.getService(app_const_1.default.TEMPLATE_BUILDING_FACTORY);
        list.forEach(function (current) {
            templateProxy.add(factory.fromData(current));
        });
    };
    return CreateTemplateBuildingsCommand;
}());
exports.default = CreateTemplateBuildingsCommand;
