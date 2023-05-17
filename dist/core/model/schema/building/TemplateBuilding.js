"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TemplateBuilding = /** @class */ (function () {
    function TemplateBuilding(id, name, levels) {
        if (id === void 0) { id = -1; }
        if (name === void 0) { name = ""; }
        if (levels === void 0) { levels = []; }
        this.id = id;
        this.name = name;
        this.levels = levels;
    }
    TemplateBuilding.prototype.clone = function () {
        return new TemplateBuilding(this.id, this.name, this.levels.map(function (l) { return l.clone(); }));
    };
    return TemplateBuilding;
}());
exports.default = TemplateBuilding;
