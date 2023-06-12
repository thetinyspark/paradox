"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_const_1 = require("../ioc/app.const");
/**
 * Saves and returns all game data
 *
 * example.ts
 * ```typescript
 * Paradox.engine.getFacade().query(Paradox.appConstants.SAVE_GAME_DATA_QUERY).then( (gameData)=>{});
 * ```
 */
class SaveGameDataQuery {
    execute(notification) {
        const facade = notification.getEmitter();
        const data = notification.getPayload();
        const tplRepo = facade.getProxy(app_const_1.default.TEMPLATE_BUILDING_REPOSITORY);
        const citRepo = facade.getProxy(app_const_1.default.CITY_REPOSITORY);
        const resRepo = facade.getProxy(app_const_1.default.RESOURCE_REPOSITORY);
        const service = facade.getService(app_const_1.default.SERIALIZER_SERVICE);
        return service.serialize(citRepo.getAll(), tplRepo.getAll(), resRepo.getAll(), data.format);
    }
}
exports.default = SaveGameDataQuery;
