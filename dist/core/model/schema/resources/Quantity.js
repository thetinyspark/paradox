"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Quantity {
    constructor(resourceID = -1, _amount = 0, _min = 0, _max = Infinity) {
        this.resourceID = resourceID;
        this._amount = _amount;
        this._min = _min;
        this._max = _max;
    }
    clone() {
        return new Quantity(this.resourceID, this.amount, this._min, this._max);
    }
    get amount() {
        return this._amount;
    }
    set amount(value) {
        this._amount = value < this._min ? this._min : value > this._max ? this._max : value;
    }
}
exports.default = Quantity;
