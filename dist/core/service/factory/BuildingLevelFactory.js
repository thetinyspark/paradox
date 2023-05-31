"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BuildingLevel_1 = require("../../model/schema/building/BuildingLevel");
var BuildingLevelFactory = /** @class */ (function () {
    function BuildingLevelFactory(_quantityListFactory) {
        this._quantityListFactory = _quantityListFactory;
        this.fromData = this.fromData.bind(this);
    }
    BuildingLevelFactory.prototype.fromData = function (obj) {
        return new BuildingLevel_1.default(obj.level, this._quantityListFactory.fromData(obj.cost || []), this._quantityListFactory.fromData(obj.prod || []), this._quantityListFactory.fromData(obj.cons || []));
    };
    return BuildingLevelFactory;
}());
exports.default = BuildingLevelFactory;
