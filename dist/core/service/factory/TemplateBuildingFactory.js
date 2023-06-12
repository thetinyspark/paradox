"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TemplateBuilding_1 = require("../../model/schema/building/TemplateBuilding");
class TemplateBuildingFactory {
    constructor(_levelFactory, _uidService) {
        this._levelFactory = _levelFactory;
        this._uidService = _uidService;
        this.fromData = this.fromData.bind(this);
    }
    fromData(obj) {
        const uid = this._uidService.createUID("templates", obj.id);
        return new TemplateBuilding_1.default(uid, obj.name, obj.levels.map(this._levelFactory.fromData));
    }
}
exports.default = TemplateBuildingFactory;
