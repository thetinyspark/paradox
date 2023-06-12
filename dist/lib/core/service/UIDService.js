"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UIDService {
    constructor() {
        this.ids = new Map();
    }
    reset() {
        this.ids = new Map();
    }
    createUID(category = "no_category", defaultUID = -1) {
        if (!this.ids.has(category)) {
            this.ids.set(category, []);
        }
        const ids = this.ids.get(category);
        const maxID = Math.max(...ids, 0);
        const id = defaultUID > maxID + 1 ? defaultUID : maxID + 1;
        ids.push(id);
        return id;
    }
}
exports.default = UIDService;
