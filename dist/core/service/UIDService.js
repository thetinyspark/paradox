"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIDService = /** @class */ (function () {
    function UIDService() {
        this.ids = new Map();
    }
    UIDService.prototype.createUID = function (category, defaultUID) {
        if (category === void 0) { category = "no_category"; }
        if (defaultUID === void 0) { defaultUID = -1; }
        if (!this.ids.has(category)) {
            this.ids.set(category, []);
        }
        var ids = this.ids.get(category);
        var maxID = Math.max.apply(Math, __spreadArray(__spreadArray([], ids, false), [0], false));
        var id = defaultUID > maxID + 1 ? defaultUID : maxID + 1;
        ids.push(id);
        return id;
    };
    return UIDService;
}());
exports.default = UIDService;
