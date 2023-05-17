"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TemplateBuilding_1 = require("../../model/schema/building/TemplateBuilding");
var TemplateBuildingFactory = /** @class */ (function () {
    function TemplateBuildingFactory(_levelFactory) {
        this._levelFactory = _levelFactory;
        this.fromData = this.fromData.bind(this);
    }
    TemplateBuildingFactory.prototype.fromData = function (obj) {
        return new TemplateBuilding_1.default(obj.id, obj.name, obj.levels.map(this._levelFactory.fromData));
    };
    return TemplateBuildingFactory;
}());
exports.default = TemplateBuildingFactory;
