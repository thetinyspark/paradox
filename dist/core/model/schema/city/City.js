"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QuantityList_1 = require("../resources/QuantityList");
var City = /** @class */ (function () {
    function City(id, name, buildings, wallet) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = ""; }
        if (buildings === void 0) { buildings = []; }
        if (wallet === void 0) { wallet = new QuantityList_1.default([]); }
        this.id = id;
        this.name = name;
        this.buildings = buildings;
        this.wallet = wallet;
    }
    return City;
}());
exports.default = City;
