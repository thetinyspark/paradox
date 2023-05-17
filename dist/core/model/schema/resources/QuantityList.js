"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QuantityList = /** @class */ (function () {
    function QuantityList(quantities) {
        this._quantities = [];
        this.set(quantities);
    }
    QuantityList.prototype.set = function (quantities) {
        this._quantities = quantities;
    };
    QuantityList.prototype.get = function () {
        return this._quantities;
    };
    QuantityList.prototype.clone = function () {
        return new QuantityList(this._quantities.map(function (q) { return q.clone(); }));
    };
    return QuantityList;
}());
exports.default = QuantityList;
