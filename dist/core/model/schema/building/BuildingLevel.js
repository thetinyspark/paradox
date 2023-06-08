"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QuantityList_1 = require("../resources/QuantityList");
var BuildingLevel = /** @class */ (function () {
    function BuildingLevel(level, cost, prod, cons, sold) {
        if (level === void 0) { level = 0; }
        if (cost === void 0) { cost = new QuantityList_1.default([]); }
        if (prod === void 0) { prod = new QuantityList_1.default([]); }
        if (cons === void 0) { cons = new QuantityList_1.default([]); }
        if (sold === void 0) { sold = new QuantityList_1.default([]); }
        this.level = level;
        this.cost = cost;
        this.prod = prod;
        this.cons = cons;
        this.sold = sold;
    }
    BuildingLevel.prototype.clone = function () {
        return new BuildingLevel(this.level, this.cost.clone(), this.prod.clone(), this.cons.clone(), this.sold.clone());
    };
    return BuildingLevel;
}());
exports.default = BuildingLevel;
