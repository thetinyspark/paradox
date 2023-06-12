"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_const_1 = require("../ioc/app.const");
/**
 * Create building's templates
 *
 * example.ts
 * ```typescript
 * const templates = [
    {
        id: 1,
        name: "Castle",
        levels: [
            {level: 1, cost: [{resourceID: 1, amount: 100}], prod: [{resourceID: 2, amount: 100}], cons:[{resourceID: 2, amount: 2}], sold:[{resourceID: 1, amount: 50}]},
            {level: 2, cost: [{resourceID: 1, amount: 200}], prod: [{resourceID: 2, amount: 200}], cons:[], sold:[]},
        ]
    },
    {
        id: 2,
        name: "Home",
        levels: []
    },
];
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.CREATE_TEMPLATE_BUILDINGS, templates);
 * ```
 */
class CreateTemplateBuildingsCommand {
    execute(notification) {
        const facade = notification.getEmitter();
        const list = notification.getPayload();
        const templateProxy = facade.getProxy(app_const_1.default.TEMPLATE_BUILDING_REPOSITORY);
        const factory = facade.getService(app_const_1.default.TEMPLATE_BUILDING_FACTORY);
        list.forEach((current) => {
            templateProxy.add(factory.fromData(current));
        });
    }
}
exports.default = CreateTemplateBuildingsCommand;
