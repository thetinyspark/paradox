"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const City_1 = require("../../model/schema/city/City");
class CityFactory {
    constructor(_buildingFactory, _quantityListFactory, _uidService) {
        this._buildingFactory = _buildingFactory;
        this._quantityListFactory = _quantityListFactory;
        this._uidService = _uidService;
        this.fromData = this.fromData.bind(this);
    }
    fromData(obj) {
        let buildings = [];
        const wallet = this._quantityListFactory.fromData(obj.wallet);
        /* istanbul ignore else */
        if (Array.isArray(obj.buildings)) {
            buildings = obj.buildings.map((b, id) => {
                return this._buildingFactory.fromData({ ...b });
            });
        }
        const uid = this._uidService.createUID("cities", obj.id);
        return new City_1.default(uid, obj.name, buildings, wallet);
    }
}
exports.default = CityFactory;
