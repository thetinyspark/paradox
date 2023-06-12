"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Building {
    constructor(name = "", level = null, tplBuildingID = -1, id = -1, frozen = false) {
        this.name = name;
        this.level = level;
        this.tplBuildingID = tplBuildingID;
        this.id = id;
        this.frozen = frozen;
    }
    clone() {
        return new Building(this.name, this.level.clone(), this.tplBuildingID, this.id, this.frozen);
    }
}
exports.default = Building;
