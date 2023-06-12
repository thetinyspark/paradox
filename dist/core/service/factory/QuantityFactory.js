"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Quantity_1 = require("../../model/schema/resources/Quantity");
class QuantityFactory {
    constructor(_resourceIRepository) {
        this._resourceIRepository = _resourceIRepository;
        this.fromData = this.fromData.bind(this);
    }
    fromData(obj) {
        const resource = this._resourceIRepository.getOneBy('id', obj.resourceID);
        if (resource === null)
            return null;
        return new Quantity_1.default(obj.resourceID, obj.amount);
    }
}
exports.default = QuantityFactory;
