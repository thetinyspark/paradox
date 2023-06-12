"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tiny_observer_1 = require("@thetinyspark/tiny-observer");
const app_const_1 = require("./ioc/app.const");
const config_1 = require("./ioc/config");
const version_1 = require("../version");
/**
 * The Engine object represents the main gateway between you and the paradox engine's core.
 */
class Engine extends tiny_observer_1.Emitter {
    constructor() {
        super();
        this._facade = null;
    }
    /**
     * Reset data but keeps configuration
     */
    reset() {
        const container = this._container;
        const uidService = container.resolve(app_const_1.default.UID_SERVICE);
        const cities = container.resolve(app_const_1.default.CITY_REPOSITORY);
        const templates = container.resolve(app_const_1.default.TEMPLATE_BUILDING_REPOSITORY);
        const resources = container.resolve(app_const_1.default.RESOURCE_REPOSITORY);
        uidService.reset();
        cities.reset();
        templates.reset();
        resources.reset();
    }
    /**
     * Init the engine, and restores game data
     * @param container a Container's instance
     * @param configuration game data to restore
     */
    init(container, configuration = {}) {
        (0, config_1.configFacade)(container);
        this._facade = container.resolve(app_const_1.default.APP_FACADE);
        this._container = container;
        // init resources and buildings
        this._facade.sendNotification(app_const_1.default.RESTORE_SAVED_DATA, configuration);
    }
    /**
     * Returns a version num
     * @returns string
     */
    getVersion() {
        return version_1.version;
    }
    /**
     * Returns the Facade which is used to dispatch commands and queries.
     * @returns Facade
     */
    getFacade() {
        return this._facade;
    }
    /**
     * Processes a cycle. A cycle means that productions are added
     * to cities's wallets and consumptions are removed from them too.
     *
     * example.ts
     * ```typescript
     * Paradox.engine.doCycle()
     * ```
     */
    doCycle() {
        this.getFacade().sendNotification(app_const_1.default.DO_CYCLE);
    }
    /**
     * Adds a building to a city
     *
     * example.ts
     * ```typescript
     * Paradox.engine.addBuilding({cityID: 1, tplID: 1})
     * ```
     */
    addBuilding(data) {
        return this.getFacade().sendNotification(app_const_1.default.ADD_BUILDING_TO_CITY, data);
    }
    /**
     * Buys and adds a building to a city if city has enough resources
     *
     * example.ts
     * ```typescript
     * const data = ;
     * Paradox.engine.buyBuilding({cityID: 1, tplID: 1})
     * ```
     */
    buyBuilding(data) {
        return this.getFacade().sendNotification(app_const_1.default.BUY_BUILDING, data);
    }
    /**
     * Upgrades a building with a specific id (it if exists)
     *
     * example.ts
     * ```typescript
     * Paradox.engine.upgradeBuilding({cityID: 1, id:1});
     * ```
     */
    upgradeBuilding(data) {
        return this.getFacade().sendNotification(app_const_1.default.UPGRADE_BUILDING, data);
    }
    /**
     * Removes a building with a specific id from a city (it if exists)
     *
     * example.ts
     * ```typescript
     * Paradox.engine.removeBuilding({cityID: 1, id:1});
     * ```
     */
    removeBuilding(data) {
        return this.getFacade().sendNotification(app_const_1.default.REMOVE_BUILDING_FROM_CITY, data);
    }
    /**
     * Sells a building with a specific id and remove it from a city (it if exists)
     *
     * example.ts
     * ```typescript
     * Paradox.engine.sellBuilding({cityID:1, id:1});
     * ```
     */
    sellBuilding(data) {
        return this.getFacade().sendNotification(app_const_1.default.SELL_BUILDING, data);
    }
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
    createBuildingTemplates(templates) {
        return this.getFacade().sendNotification(app_const_1.default.CREATE_TEMPLATE_BUILDINGS, templates);
    }
    /**
     * Returns all building's templates
     *
     * example.ts
     * ```typescript
     * Paradox.engine.getTemplateBuildings().then( (templates)=>{});
     * ```
     */
    getTemplateBuildings() {
        return this.getFacade().query(app_const_1.default.GET_TEMPLATES_BUILDINGS_QUERY);
    }
    /**
     * Create resources
     *
     * example.ts
     * ```typescript
     * const resources = [{id:1, name: "gold"},{id:2, name: "wood"},{id:3, name: "food"}];
     * Paradox.engine.createResources(resources)
     * ```
     */
    createResources(resources) {
        return this.getFacade().sendNotification(app_const_1.default.CREATE_RESOURCES, resources);
    }
    /**
     * Returns all resources
     *
     * example.ts
     * ```typescript
     * Paradox.engine.getResources().then( (templates)=>{});
     * ```
     */
    getResources() {
        return this.getFacade().query(app_const_1.default.GET_RESOURCES_QUERY);
    }
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
    addCity(city) {
        return this.getFacade().sendNotification(app_const_1.default.ADD_CITY, city);
    }
    /**
     * Removes city
     *
     * example.ts
     * ```typescript
     * const data = {id:1};
     * Paradox.engine.removeCity(data);
     * ```
    */
    removeCity(city) {
        return this.getFacade().sendNotification(app_const_1.default.REMOVE_CITY, city);
    }
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
    createCities(cities) {
        return this.getFacade().sendNotification(app_const_1.default.CREATE_CITIES, cities);
    }
    /**
     * Returns all cities
     *
     * example.ts
     * ```typescript
     * Paradox.engine.getCities().then( (templates)=>{});
     * ```
     */
    getCities() {
        return this.getFacade().query(app_const_1.default.GET_CITIES_QUERY);
    }
    /**
     * Returns a city by its id (if exists)
     *
     * example.ts
     * ```typescript
     * Paradox.engine.getCityByID({id:1}).then( (city)=>{});
     * ```
     */
    getCityByID(data) {
        return this.getFacade().query(app_const_1.default.GET_CITY_QUERY, data);
    }
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
    restoreGameData(data) {
        return this.getFacade().sendNotification(app_const_1.default.RESTORE_SAVED_DATA, data);
    }
    /**
     * Saves and returns all game data
     *
     * example.ts
     * ```typescript
     * Paradox.engine.saveGameData().then( (gameData)=>{});
     * ```
     */
    saveGameData() {
        return this.getFacade().query(app_const_1.default.SAVE_GAME_DATA_QUERY);
    }
}
exports.default = Engine;
