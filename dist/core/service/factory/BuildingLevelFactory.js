"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BuildingLevel_1 = require("../../model/schema/building/BuildingLevel");
class BuildingLevelFactory {
    constructor(_quantityListFactory) {
        this._quantityListFactory = _quantityListFactory;
        this.fromData = this.fromData.bind(this);
    }
    fromData(obj) {
        return new BuildingLevel_1.default(obj.level, this._quantityListFactory.fromData(obj.cost || []), this._quantityListFactory.fromData(obj.prod || []), this._quantityListFactory.fromData(obj.cons || []), this._quantityListFactory.fromData(obj.sold || []));
    }
}
exports.default = BuildingLevelFactory;
