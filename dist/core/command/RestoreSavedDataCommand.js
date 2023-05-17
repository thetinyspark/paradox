"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_const_1 = require("../ioc/app.const");
var RestoreSavedDataCommand = /** @class */ (function () {
    function RestoreSavedDataCommand() {
    }
    RestoreSavedDataCommand.prototype.execute = function (notification) {
        var facade = notification.getEmitter();
        var configuration = notification.getPayload();
        facade.sendNotification(app_const_1.default.CREATE_RESOURCES, configuration.resources);
        facade.sendNotification(app_const_1.default.CREATE_TEMPLATE_BUILDINGS, configuration.templateBuildings);
        facade.sendNotification(app_const_1.default.CREATE_CITIES, configuration.cities);
    };
    return RestoreSavedDataCommand;
}());
exports.default = RestoreSavedDataCommand;
