"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Quantity = /** @class */ (function () {
    function Quantity(resourceID, amount) {
        if (resourceID === void 0) { resourceID = -1; }
        if (amount === void 0) { amount = 0; }
        this.resourceID = resourceID;
        this.amount = amount;
    }
    Quantity.prototype.clone = function () {
        return new Quantity(this.resourceID, this.amount);
    };
    return Quantity;
}());
exports.default = Quantity;
