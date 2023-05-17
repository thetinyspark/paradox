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
var tiny_observer_1 = require("@thetinyspark/tiny-observer");
var app_const_1 = require("./ioc/app.const");
var config_1 = require("./ioc/config");
var version_1 = require("../version");
var Engine = /** @class */ (function (_super) {
    __extends(Engine, _super);
    function Engine() {
        var _this = _super.call(this) || this;
        _this._facade = null;
        return _this;
    }
    Engine.prototype.init = function (container, configuration) {
        if (configuration === void 0) { configuration = {}; }
        (0, config_1.configFacade)(container);
        this._facade = container.resolve(app_const_1.default.APP_FACADE);
        // init resources and buildings
        this._facade.sendNotification(app_const_1.default.RESTORE_SAVED_DATA, configuration);
    };
    Engine.prototype.getVersion = function () {
        return version_1.version;
    };
    Engine.prototype.getFacade = function () {
        return this._facade;
    };
    return Engine;
}(tiny_observer_1.Emitter));
exports.default = Engine;
