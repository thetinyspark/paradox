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
/**
 * The Engine object represents the main gateway between you and the paradox engine's core.
 */
var Engine = /** @class */ (function (_super) {
    __extends(Engine, _super);
    function Engine() {
        var _this = _super.call(this) || this;
        _this._facade = null;
        return _this;
    }
    /**
     * Init the engine, and restores game data
     * @param container a Container's instance
     * @param configuration game data to restore
     */
    Engine.prototype.init = function (container, configuration) {
        if (configuration === void 0) { configuration = {}; }
        (0, config_1.configFacade)(container);
        this._facade = container.resolve(app_const_1.default.APP_FACADE);
        // init resources and buildings
        this._facade.sendNotification(app_const_1.default.RESTORE_SAVED_DATA, configuration);
    };
    /**
     * Returns a version num
     * @returns string
     */
    Engine.prototype.getVersion = function () {
        return version_1.version;
    };
    /**
     * Returns the Facade which is used to dispatch commands and queries.
     * @returns Facade
     */
    Engine.prototype.getFacade = function () {
        return this._facade;
    };
    /**
     * Processes a cycle. A cycle means that productions are added
     * to cities's wallets and consumptions are removed from them too.
     *
     * example.ts
     * ```typescript
     * Paradox.engine.doCycle()
     * ```
     */
    Engine.prototype.doCycle = function () {
        this.getFacade().sendNotification(app_const_1.default.DO_CYCLE);
    };
    /**
     * Adds a building to a city
     *
     * example.ts
     * ```typescript
     * const data = ;
     * Paradox.engine.addBuilding({cityID: 1, tplID: 1})
     * ```
     */
    Engine.prototype.addBuilding = function (data) {
        return this.getFacade().sendNotification(app_const_1.default.ADD_BUILDING_TO_CITY, data);
    };
    /**
     * Buys and adds a building to a city if city has enough resources
     *
     * example.ts
     * ```typescript
     * const data = ;
     * Paradox.engine.buyBuilding({cityID: 1, tplID: 1})
     * ```
     */
    Engine.prototype.buyBuilding = function (data) {
        return this.getFacade().sendNotification(app_const_1.default.BUY_BUILDING, data);
    };
    /**
     * Upgrades a building with a specific id (it if exists)
     *
     * example.ts
     * ```typescript
     * Paradox.engine.upgradeBuilding({cityID: 1, id:1});
     * ```
     */
    Engine.prototype.upgradeBuilding = function (data) {
        return this.getFacade().sendNotification(app_const_1.default.UPGRADE_BUILDING, data);
    };
    /**
     * Removes a building with a specific id from a city (it if exists)
     *
     * example.ts
     * ```typescript
     * Paradox.engine.removeBuilding({cityID: 1, id:1});
     * ```
     */
    Engine.prototype.removeBuilding = function (data) {
        return this.getFacade().sendNotification(app_const_1.default.REMOVE_BUILDING_FROM_CITY, data);
    };
    /**
     * Sells a building with a specific id and remove it from a city (it if exists)
     *
     * example.ts
     * ```typescript
     * Paradox.engine.sellBuilding({cityID:1, id:1});
     * ```
     */
    Engine.prototype.sellBuilding = function (data) {
        return this.getFacade().sendNotification(app_const_1.default.SELL_BUILDING, data);
    };
    /**
     * Create building's templates
     *
     * example.ts
     * ```typescript
const templates = [
    {
        id: 1,
        name: "Castle",
        levels: [
            {
                level: 1,
                cost: [{resourceID: 1, amount: 100}],
                prod: [{resourceID: 2, amount: 100}],
                cons:[{resourceID: 2, amount: 2}],
                sold:[{resourceID: 1, amount: 50}]
            },
            {
                level: 2,
                cost: [{resourceID: 1, amount: 200}],
                prod: [{resourceID: 2, amount: 200}],
                cons:[],
                sold:[]
            },
        ]
    },
    {
        id: 2,
        name: "Home",
        levels: []
    },
];
Paradox.engine.createBuildingTemplates(templates);
    * ```
    */
    Engine.prototype.createBuildingTemplates = function (templates) {
        return this.getFacade().sendNotification(app_const_1.default.CREATE_TEMPLATE_BUILDINGS, templates);
    };
    /**
     * Returns all building's templates
     *
     * example.ts
     * ```typescript
     * Paradox.engine.getTemplateBuildings().then( (templates)=>{});
     * ```
     */
    Engine.prototype.getTemplateBuildings = function () {
        return this.getFacade().query(app_const_1.default.GET_TEMPLATES_BUILDINGS_QUERY);
    };
    /**
     * Create resources
     *
     * example.ts
     * ```typescript
     * const resources = [{id:1, name: "gold"},{id:2, name: "wood"},{id:3, name: "food"}];
     * Paradox.engine.createResources(resources)
     * ```
     */
    Engine.prototype.createResources = function (resources) {
        return this.getFacade().sendNotification(app_const_1.default.CREATE_RESOURCES, resources);
    };
    /**
     * Returns all resources
     *
     * example.ts
     * ```typescript
     * Paradox.engine.getResources().then( (templates)=>{});
     * ```
     */
    Engine.prototype.getResources = function () {
        return this.getFacade().query(app_const_1.default.GET_RESOURCES_QUERY);
    };
    /**
     * Adds city
     *
     * example.ts
     * ```typescript
    const cityData = {
        id: 1,
        name: "Atlantis",
        buildings:[{tplID:1, level:2}],
        wallet: [{resourceID: 1, amount: 100}]
    };
    * Paradox.engine.addCity(cityData);
    * ```
    */
    Engine.prototype.addCity = function (city) {
        return this.getFacade().sendNotification(app_const_1.default.ADD_CITY, city);
    };
    /**
     * Create cities
     *
     * example.ts
     * ```typescript
     * const city1 = {id: 1, name: "city1", buildings:[{tplID:1, level:1}],wallet: [{resourceID: 1, amount: 100}]};
     * const city2 = {id: 2, name: "city2", buildings:[{tplID:2, level:1}],wallet: [{resourceID: 2, amount: 100}]};
     * const cities = [city1,city2];
     * Paradox.engine.createCities(cities)
     * ```
     */
    Engine.prototype.createCities = function (cities) {
        return this.getFacade().sendNotification(app_const_1.default.CREATE_CITIES, cities);
    };
    /**
     * Returns all cities
     *
     * example.ts
     * ```typescript
     * Paradox.engine.getCities().then( (templates)=>{});
     * ```
     */
    Engine.prototype.getCities = function () {
        return this.getFacade().query(app_const_1.default.GET_CITIES_QUERY);
    };
    /**
     * Returns a city by its id (if exists)
     *
     * example.ts
     * ```typescript
     * Paradox.engine.getCityByID({id:1}).then( (city)=>{});
     * ```
     */
    Engine.prototype.getCityByID = function (data) {
        return this.getFacade().query(app_const_1.default.GET_CITY_QUERY, data);
    };
    /**
     * Restores game data
     *
     * example.ts
     * ```typescript
     * const cities             = [... cities data];
     * const resources          = [... resources data];
     * const templateBuildings  = [... templates data];
     * const data =  {cities resources, templateBuildings};
     * Paradox.engine.restoreGameData(data);
     * ```
     */
    Engine.prototype.restoreGameData = function (data) {
        return this.getFacade().sendNotification(app_const_1.default.RESTORE_SAVED_DATA, data);
    };
    /**
     * Saves and returns all game data
     *
     * example.ts
     * ```typescript
     * Paradox.engine.saveGameData().then( (gameData)=>{});
     * ```
     */
    Engine.prototype.saveGameData = function () {
        return this.getFacade().query(app_const_1.default.SAVE_GAME_DATA_QUERY);
    };
    return Engine;
}(tiny_observer_1.Emitter));
exports.default = Engine;
