"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_const_1 = require("../ioc/app.const");
/**
 * Saves and returns all game data
 *
 * example.ts
 * ```typescript
 * Paradox.engine.getFacade().query(Paradox.appConstants.SAVE_GAME_DATA_QUERY).then( (gameData)=>{});
 * ```
 */
var SaveGameDataQuery = /** @class */ (function () {
    function SaveGameDataQuery() {
    }
    SaveGameDataQuery.prototype.execute = function (notification) {
        var facade = notification.getEmitter();
        var data = notification.getPayload();
        var tplRepo = facade.getProxy(app_const_1.default.TEMPLATE_BUILDING_REPOSITORY);
        var citRepo = facade.getProxy(app_const_1.default.CITY_REPOSITORY);
        var resRepo = facade.getProxy(app_const_1.default.RESOURCE_REPOSITORY);
        var service = facade.getService(app_const_1.default.SERIALIZER_SERVICE);
        return service.serialize(citRepo.getAll(), tplRepo.getAll(), resRepo.getAll(), data.format);
    };
    return SaveGameDataQuery;
}());
exports.default = SaveGameDataQuery;
