"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Building = /** @class */ (function () {
    function Building(name, level, tplBuildingID) {
        if (name === void 0) { name = ""; }
        if (level === void 0) { level = null; }
        if (tplBuildingID === void 0) { tplBuildingID = -1; }
        this.name = name;
        this.level = level;
        this.tplBuildingID = tplBuildingID;
    }
    Building.prototype.clone = function () {
        return new Building(this.name, this.level.clone(), this.tplBuildingID);
    };
    return Building;
}());
exports.default = Building;
