"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QuantityList_1 = require("../../model/schema/resources/QuantityList");
class QuantityListFactory {
    constructor(_quantityFactory) {
        this._quantityFactory = _quantityFactory;
        this.fromData = this.fromData.bind(this);
    }
    fromData(obj) {
        return new QuantityList_1.default(obj.map(this._quantityFactory.fromData));
    }
}
exports.default = QuantityListFactory;
