"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Resource {
    constructor(id = -1, name = "", min = 0, max = Infinity) {
        this.id = id;
        this.name = name;
        this.min = min;
        this.max = max;
    }
}
exports.default = Resource;
