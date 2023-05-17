"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QuantityList_1 = require("../../model/schema/resources/QuantityList");
var QuantityListFactory = /** @class */ (function () {
    function QuantityListFactory(_quantityFactory) {
        this._quantityFactory = _quantityFactory;
        this.fromData = this.fromData.bind(this);
    }
    QuantityListFactory.prototype.fromData = function (obj) {
        return new QuantityList_1.default(obj.map(this._quantityFactory.fromData));
    };
    return QuantityListFactory;
}());
exports.default = QuantityListFactory;
