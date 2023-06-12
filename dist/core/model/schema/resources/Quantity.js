"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Quantity {
    constructor(resourceID = -1, amount = 0) {
        this.resourceID = resourceID;
        this.amount = amount;
    }
    clone() {
        return new Quantity(this.resourceID, this.amount);
    }
}
exports.default = Quantity;
