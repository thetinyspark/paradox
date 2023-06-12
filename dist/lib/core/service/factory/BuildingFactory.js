"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Building_1 = require("../../model/schema/building/Building");
class BuildingFactory {
    constructor(_repo, _uidService) {
        this._repo = _repo;
        this._uidService = _uidService;
        this.fromData = this.fromData.bind(this);
    }
    fromData(obj) {
        const template = this._repo.getOneBy('id', obj.tplID) || null;
        if (template === null)
            return null;
        const id = this._uidService.createUID("buildings", obj.id);
        if (template.levels.length === 0)
            return new Building_1.default(template.name, null, template.id, id, obj.frozen);
        const level = template.levels.find(l => l.level === obj.level) || template.levels[0];
        return new Building_1.default(template.name, level.clone(), template.id, id, obj.frozen);
    }
}
exports.default = BuildingFactory;
