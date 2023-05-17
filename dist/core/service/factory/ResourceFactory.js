"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Resource_1 = require("../../model/schema/resources/Resource");
var ResourceFactory = /** @class */ (function () {
    function ResourceFactory() {
        this.fromData = this.fromData.bind(this);
    }
    ResourceFactory.prototype.fromData = function (obj) {
        return new Resource_1.default(obj.id, obj.name);
    };
    return ResourceFactory;
}());
exports.default = ResourceFactory;
