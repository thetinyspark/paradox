"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var coffe_maker_1 = require("@thetinyspark/coffe-maker");
var config_1 = require("./core/ioc/config");
var Engine_1 = require("./core/Engine");
var app_const_1 = require("./core/ioc/app.const");
var defaultContainer = (0, config_1.configIOC)(new coffe_maker_1.Container());
var engine = new Engine_1.default();
module.exports = {
    engine: engine,
    defaultContainer: defaultContainer,
    appConstants: app_const_1.default
};
function onLoad() {
    return __awaiter(this, void 0, void 0, function () {
        var save, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    window.removeEventListener("load", onLoad);
                    save = { cities: [], resources: [], templateBuildings: [] };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, window.fetch("./save.json")];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    save = _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 5];
                case 5:
                    engine.init(defaultContainer, save);
                    document.getElementById("cycleBtn").addEventListener("click", function () {
                        engine.getFacade().sendNotification(app_const_1.default.DO_CYCLE);
                        refresh();
                    });
                    document.getElementById("cityBtn").addEventListener("click", createCity);
                    refresh();
                    return [2 /*return*/];
            }
        });
    });
}
function createCity() {
    return __awaiter(this, void 0, void 0, function () {
        var cities, counterID, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, engine.getFacade().query(app_const_1.default.GET_CITIES_QUERY)];
                case 1:
                    cities = _a.sent();
                    counterID = Math.max.apply(Math, __spreadArray([0], cities.map(function (c) { return c.id; }), false));
                    data = {
                        id: counterID + 1,
                        name: "City_" + counterID,
                        buildings: [{ tplID: 4 }],
                        wallet: []
                    };
                    engine.getFacade().sendNotification(app_const_1.default.ADD_CITY, data);
                    refresh();
                    return [2 /*return*/];
            }
        });
    });
}
function refresh() {
    displayCities();
}
function getResourceNameByID(resources, id) {
    return resources.find(function (r) { return r.id === id; }).name;
}
function displayCities() {
    return __awaiter(this, void 0, void 0, function () {
        var container, cities, resources;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    container = document.getElementById("cities");
                    return [4 /*yield*/, engine.getFacade().query(app_const_1.default.GET_CITIES_QUERY)];
                case 1:
                    cities = _a.sent();
                    return [4 /*yield*/, engine.getFacade().query(app_const_1.default.GET_RESOURCES_QUERY)];
                case 2:
                    resources = _a.sent();
                    container.innerHTML = cities.map(function (city) {
                        return "\n                <div class=\"city\">\n                    <h2>" + city.name + "</h2>\n                    <h3>Ressources</h3>\n                    " + city.wallet.get().map(function (r) { return "<p>" + getResourceNameByID(resources, r.resourceID) + ":" + r.amount + "</p>"; }).join("") + "\n                    <h3>B\u00E2timents</h3>\n                    " + city.buildings.map(function (b) {
                            if (b.level)
                                "<p>" + b.name + " - niv " + b.level.level + "</p>";
                            else
                                "<p>" + b.name + "</p>";
                        }).join("") + "\n                </div>\n            ";
                    }).join("");
                    return [2 /*return*/];
            }
        });
    });
}
window.addEventListener("load", onLoad);
