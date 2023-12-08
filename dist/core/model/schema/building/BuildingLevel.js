"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QuantityList_1 = require("../resources/QuantityList");
class BuildingLevel {
    constructor(level = 0, cost = new QuantityList_1.default([]), prod = new QuantityList_1.default([]), cons = new QuantityList_1.default([]), sold = new QuantityList_1.default([]), prodFrequency = 1, cycleCounter = 0) {
        this.level = level;
        this.cost = cost;
        this.prod = prod;
        this.cons = cons;
        this.sold = sold;
        this.prodFrequency = prodFrequency;
        this.cycleCounter = cycleCounter;
    }
    clone() {
        return new BuildingLevel(this.level, this.cost.clone(), this.prod.clone(), this.cons.clone(), this.sold.clone(), this.prodFrequency);
    }
}
exports.default = BuildingLevel;
