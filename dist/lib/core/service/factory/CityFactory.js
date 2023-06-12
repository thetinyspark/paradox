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
        if (Array.isArray(obj.buildings)) {
            buildings = obj.buildings.map((b, id) => {
                const data = { ...b };
                const uid = this._uidService.createUID("cities", b.id);
                data.id = uid;
                return this._buildingFactory.fromData(data);
            });
        }
        return new City_1.default(obj.id, obj.name, buildings, wallet);
    }
}
exports.default = CityFactory;
