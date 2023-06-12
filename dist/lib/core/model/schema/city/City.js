"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QuantityList_1 = require("../resources/QuantityList");
class City {
    constructor(id = -1, name = "", buildings = [], wallet = new QuantityList_1.default([])) {
        this.id = id;
        this.name = name;
        this.buildings = buildings;
        this.wallet = wallet;
    }
}
exports.default = City;
