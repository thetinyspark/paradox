"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_const_1 = require("../ioc/app.const");
/**
 * Create resources
 *
 * example.ts
 * ```typescript
 * const resources = [{id:1, name: "gold"},{id:2, name: "wood"},{id:3, name: "food"}];
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.CREATE_RESOURCES, resources);
 * ```
 */
var CreateResourcesCommand = /** @class */ (function () {
    function CreateResourcesCommand() {
    }
    CreateResourcesCommand.prototype.execute = function (notification) {
        var facade = notification.getEmitter();
        var list = notification.getPayload();
        var proxy = facade.getProxy(app_const_1.default.RESOURCE_REPOSITORY);
        var factory = facade.getService(app_const_1.default.RESOURCE_FACTORY);
        list.forEach(function (current) {
            proxy.add(factory.fromData(current));
        });
    };
    return CreateResourcesCommand;
}());
exports.default = CreateResourcesCommand;
