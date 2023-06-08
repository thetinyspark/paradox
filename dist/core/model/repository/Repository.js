"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var coffe_maker_1 = require("@thetinyspark/coffe-maker");
var Repository = /** @class */ (function (_super) {
    __extends(Repository, _super);
    function Repository(storeModel, key) {
        if (storeModel === void 0) { storeModel = new coffe_maker_1.Model(); }
        if (key === void 0) { key = "data"; }
        var _this = _super.call(this) || this;
        _this._state = null;
        _this._key = "data";
        _this._key = key;
        _this._state = storeModel;
        _this.reset();
        return _this;
    }
    Repository.prototype.reset = function () {
        var save = {};
        save[this._key] = new Array();
        this._state.setState(save);
    };
    Repository.prototype.add = function (obj) {
        var data = this.getAll();
        data.push(obj);
        var save = {};
        save[this._key] = data;
        this._state.setState(save);
    };
    Repository.prototype.remove = function (obj) {
        var data = this.getAll();
        data.splice(data.indexOf(obj), 1);
        var save = {};
        save[this._key] = data;
        this._state.setState(save);
    };
    Repository.prototype.getAllBy = function (critera, value) {
        return this.getAll().filter(function (current) {
            return current[critera] === value;
        });
    };
    Repository.prototype.getOneBy = function (critera, value) {
        return this.getAll().find(function (current) {
            return current[critera] === value;
        }) || null;
    };
    Repository.prototype.getAll = function () {
        return this._state.getState()[this._key];
    };
    return Repository;
}(coffe_maker_1.Proxy));
exports.default = Repository;
