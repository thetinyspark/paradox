"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QuantityList {
    constructor(quantities = []) {
        this._quantities = [];
        this.set(quantities);
    }
    set(quantities) {
        this._quantities = quantities;
    }
    get() {
        return this._quantities;
    }
    clone() {
        return new QuantityList(this._quantities.filter(q => q !== null).map(q => q.clone()));
    }
}
exports.default = QuantityList;
