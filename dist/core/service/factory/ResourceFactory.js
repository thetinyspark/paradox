"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../../model/schema/resources/Resource");
class ResourceFactory {
    constructor(_uidService) {
        this._uidService = _uidService;
        this.fromData = this.fromData.bind(this);
    }
    fromData(obj) {
        return new Resource_1.default(this._uidService.createUID("resources", obj.id), obj.name, obj.min, obj.max);
    }
}
exports.default = ResourceFactory;
