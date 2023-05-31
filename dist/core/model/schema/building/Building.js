"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Building = /** @class */ (function () {
    function Building(name, level, tplBuildingID, id) {
        if (name === void 0) { name = ""; }
        if (level === void 0) { level = null; }
        if (tplBuildingID === void 0) { tplBuildingID = -1; }
        if (id === void 0) { id = -1; }
        this.name = name;
        this.level = level;
        this.tplBuildingID = tplBuildingID;
        this.id = id;
    }
    Building.prototype.clone = function () {
        return new Building(this.name, this.level.clone(), this.tplBuildingID, this.id);
    };
    return Building;
}());
exports.default = Building;
