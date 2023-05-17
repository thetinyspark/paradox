"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Quantity_1 = require("../../model/schema/resources/Quantity");
var QuantityFactory = /** @class */ (function () {
    function QuantityFactory(_resourceRepository) {
        this._resourceRepository = _resourceRepository;
        this.fromData = this.fromData.bind(this);
    }
    QuantityFactory.prototype.fromData = function (obj) {
        var resource = this._resourceRepository.getOneBy('id', obj.resourceID);
        if (resource === null) {
            // console.log("non existing resource for resource id: "+obj.resourceID);
            return null;
        }
        return new Quantity_1.default(obj.resourceID, obj.amount);
    };
    return QuantityFactory;
}());
exports.default = QuantityFactory;
