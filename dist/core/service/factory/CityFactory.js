"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var City_1 = require("../../model/schema/city/City");
var CityFactory = /** @class */ (function () {
    function CityFactory(_buildingFactory, _quantityListFactory, _uidService) {
        this._buildingFactory = _buildingFactory;
        this._quantityListFactory = _quantityListFactory;
        this._uidService = _uidService;
        this.fromData = this.fromData.bind(this);
    }
    CityFactory.prototype.fromData = function (obj) {
        var _this = this;
        var buildings = [];
        var wallet = this._quantityListFactory.fromData(obj.wallet);
        if (Array.isArray(obj.buildings)) {
            buildings = obj.buildings.map(function (b, id) {
                var data = __assign({}, b);
                var uid = _this._uidService.createUID("cities", b.id);
                data.id = uid;
                return _this._buildingFactory.fromData(data);
            });
        }
        return new City_1.default(obj.id, obj.name, buildings, wallet);
    };
    return CityFactory;
}());
exports.default = CityFactory;
