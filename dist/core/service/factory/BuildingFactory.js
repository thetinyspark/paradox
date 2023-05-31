"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Building_1 = require("../../model/schema/building/Building");
var BuildingFactory = /** @class */ (function () {
    function BuildingFactory(_repo) {
        this._repo = _repo;
        this.fromData = this.fromData.bind(this);
    }
    BuildingFactory.prototype.fromData = function (obj) {
        var template = this._repo.getOneBy('id', obj.tplID) || null;
        if (template === null)
            return null;
        if (template.levels.length === 0)
            return new Building_1.default(template.name, null, template.id, obj.id);
        var level = template.levels.find(function (l) { return l.level === obj.level; }) || template.levels[0];
        return new Building_1.default(template.name, level.clone(), template.id, obj.id);
    };
    return BuildingFactory;
}());
exports.default = BuildingFactory;
