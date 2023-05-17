"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var City_1 = require("../../model/schema/city/City");
var CityFactory = /** @class */ (function () {
    function CityFactory(_buildingFactory, _quantityListFactory) {
        this._buildingFactory = _buildingFactory;
        this._quantityListFactory = _quantityListFactory;
        this.fromData = this.fromData.bind(this);
    }
    CityFactory.prototype.fromData = function (obj) {
        var _this = this;
        var buildings = [];
        var wallet = this._quantityListFactory.fromData(obj.wallet);
        if (Array.isArray(obj.buildings)) {
            buildings.push.apply(buildings, obj.buildings.map(function (b) { return _this._buildingFactory.fromData(b); }));
        }
        return new City_1.default(obj.id, obj.name, buildings, wallet);
    };
    return CityFactory;
}());
exports.default = CityFactory;
