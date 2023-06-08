"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_const_1 = require("../ioc/app.const");
/**
 * Upgrades a building with a specific id (it if exists)
 *
 * example.ts
 * ```typescript
 * const data = {cityID: 1, id:1};
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.UPGRADE_BUILDING, data);
 * ```
 */
var UpgradeBuildingCommand = /** @class */ (function () {
    function UpgradeBuildingCommand() {
    }
    UpgradeBuildingCommand.prototype.execute = function (notification) {
        var facade = notification.getEmitter();
        var data = notification.getPayload();
        var tplRepo = facade.getProxy(app_const_1.default.TEMPLATE_BUILDING_REPOSITORY);
        var cityRepo = facade.getProxy(app_const_1.default.CITY_REPOSITORY);
        var city = cityRepo.getOneBy('id', data.cityID);
        var target = city.buildings.find(function (b) { return b.id === data.id; }) || null;
        var tplID = target === null ? -1 : target.tplBuildingID;
        var tpl = tplRepo.getOneBy('id', tplID);
        if (tpl === null || city === null || target === null)
            return;
        if (!city.buildings.includes(target))
            return;
        var nextLevel = tpl.levels.find(function (l) { return l.level === target.level.level + 1; }) || null;
        if (nextLevel === null)
            return;
        if (data.freely === true) {
            target.level = nextLevel.clone();
            return;
        }
        var cost = nextLevel.cost;
        var wallet = city.wallet;
        var paymentService = facade.getService(app_const_1.default.PAYMENT_SERVICE);
        if (paymentService.pay(wallet, cost)) {
            target.level = nextLevel.clone();
        }
    };
    return UpgradeBuildingCommand;
}());
exports.default = UpgradeBuildingCommand;
