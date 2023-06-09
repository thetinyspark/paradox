"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TemplateBuilding_1 = require("../../model/schema/building/TemplateBuilding");
var TemplateBuildingFactory = /** @class */ (function () {
    function TemplateBuildingFactory(_levelFactory, _uidService) {
        this._levelFactory = _levelFactory;
        this._uidService = _uidService;
        this.fromData = this.fromData.bind(this);
    }
    TemplateBuildingFactory.prototype.fromData = function (obj) {
        var uid = this._uidService.createUID("templates", obj.id);
        return new TemplateBuilding_1.default(uid, obj.name, obj.levels.map(this._levelFactory.fromData));
    };
    return TemplateBuildingFactory;
}());
exports.default = TemplateBuildingFactory;
