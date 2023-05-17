"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Resource = /** @class */ (function () {
    function Resource(id, name) {
        if (id === void 0) { id = -1; }
        if (name === void 0) { name = ""; }
        this.id = id;
        this.name = name;
    }
    return Resource;
}());
exports.default = Resource;
