"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TemplateBuilding {
    constructor(id = -1, name = "", levels = []) {
        this.id = id;
        this.name = name;
        this.levels = levels;
    }
    clone() {
        return new TemplateBuilding(this.id, this.name, this.levels.map(l => l.clone()));
    }
}
exports.default = TemplateBuilding;
