/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/core/Engine.js":
/*!*****************************!*\
  !*** ./dist/core/Engine.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar tiny_observer_1 = __webpack_require__(/*! @thetinyspark/tiny-observer */ \"./node_modules/@thetinyspark/tiny-observer/dist/index.js\");\r\nvar app_const_1 = __webpack_require__(/*! ./ioc/app.const */ \"./dist/core/ioc/app.const.js\");\r\nvar config_1 = __webpack_require__(/*! ./ioc/config */ \"./dist/core/ioc/config.js\");\r\nvar version_1 = __webpack_require__(/*! ../version */ \"./dist/version.js\");\r\n/**\r\n * The Engine object represents the main gateway between you and the paradox engine's core.\r\n */\r\nvar Engine = /** @class */ (function (_super) {\r\n    __extends(Engine, _super);\r\n    function Engine() {\r\n        var _this = _super.call(this) || this;\r\n        _this._facade = null;\r\n        return _this;\r\n    }\r\n    /**\r\n     * Init the engine, and restores game data\r\n     * @param container a Container's instance\r\n     * @param configuration game data to restore\r\n     */\r\n    Engine.prototype.init = function (container, configuration) {\r\n        if (configuration === void 0) { configuration = {}; }\r\n        (0, config_1.configFacade)(container);\r\n        this._facade = container.resolve(app_const_1.default.APP_FACADE);\r\n        // init resources and buildings\r\n        this._facade.sendNotification(app_const_1.default.RESTORE_SAVED_DATA, configuration);\r\n    };\r\n    /**\r\n     * Returns a version num\r\n     * @returns string\r\n     */\r\n    Engine.prototype.getVersion = function () {\r\n        return version_1.version;\r\n    };\r\n    /**\r\n     * Returns the Facade which is used to dispatch commands and queries.\r\n     * @returns Facade\r\n     */\r\n    Engine.prototype.getFacade = function () {\r\n        return this._facade;\r\n    };\r\n    /**\r\n     * Processes a cycle. A cycle means that productions are added\r\n     * to cities's wallets and consumptions are removed from them too.\r\n     *\r\n     * example.ts\r\n     * ```typescript\r\n     * Paradox.engine.doCycle()\r\n     * ```\r\n     */\r\n    Engine.prototype.doCycle = function () {\r\n        this.getFacade().sendNotification(app_const_1.default.DO_CYCLE);\r\n    };\r\n    /**\r\n     * Adds a building to a city\r\n     *\r\n     * example.ts\r\n     * ```typescript\r\n     * const data = ;\r\n     * Paradox.engine.addBuilding({cityID: 1, tplID: 1})\r\n     * ```\r\n     */\r\n    Engine.prototype.addBuilding = function (data) {\r\n        return this.getFacade().sendNotification(app_const_1.default.ADD_BUILDING_TO_CITY, data);\r\n    };\r\n    /**\r\n     * Buys and adds a building to a city if city has enough resources\r\n     *\r\n     * example.ts\r\n     * ```typescript\r\n     * const data = ;\r\n     * Paradox.engine.buyBuilding({cityID: 1, tplID: 1})\r\n     * ```\r\n     */\r\n    Engine.prototype.buyBuilding = function (data) {\r\n        return this.getFacade().sendNotification(app_const_1.default.BUY_BUILDING, data);\r\n    };\r\n    /**\r\n     * Upgrades a building with a specific id (it if exists)\r\n     *\r\n     * example.ts\r\n     * ```typescript\r\n     * Paradox.engine.upgradeBuilding({cityID: 1, id:1});\r\n     * ```\r\n     */\r\n    Engine.prototype.upgradeBuilding = function (data) {\r\n        return this.getFacade().sendNotification(app_const_1.default.UPGRADE_BUILDING, data);\r\n    };\r\n    /**\r\n     * Removes a building with a specific id from a city (it if exists)\r\n     *\r\n     * example.ts\r\n     * ```typescript\r\n     * Paradox.engine.removeBuilding({cityID: 1, id:1});\r\n     * ```\r\n     */\r\n    Engine.prototype.removeBuilding = function (data) {\r\n        return this.getFacade().sendNotification(app_const_1.default.REMOVE_BUILDING_FROM_CITY, data);\r\n    };\r\n    /**\r\n     * Sells a building with a specific id and remove it from a city (it if exists)\r\n     *\r\n     * example.ts\r\n     * ```typescript\r\n     * Paradox.engine.sellBuilding({cityID:1, id:1});\r\n     * ```\r\n     */\r\n    Engine.prototype.sellBuilding = function (data) {\r\n        return this.getFacade().sendNotification(app_const_1.default.SELL_BUILDING, data);\r\n    };\r\n    /**\r\n     * Create building's templates\r\n     *\r\n     * example.ts\r\n     * ```typescript\r\nconst templates = [\r\n    {\r\n        id: 1,\r\n        name: \"Castle\",\r\n        levels: [\r\n            {\r\n                level: 1,\r\n                cost: [{resourceID: 1, amount: 100}],\r\n                prod: [{resourceID: 2, amount: 100}],\r\n                cons:[{resourceID: 2, amount: 2}],\r\n                sold:[{resourceID: 1, amount: 50}]\r\n            },\r\n            {\r\n                level: 2,\r\n                cost: [{resourceID: 1, amount: 200}],\r\n                prod: [{resourceID: 2, amount: 200}],\r\n                cons:[],\r\n                sold:[]\r\n            },\r\n        ]\r\n    },\r\n    {\r\n        id: 2,\r\n        name: \"Home\",\r\n        levels: []\r\n    },\r\n];\r\nParadox.engine.createBuildingTemplates(templates);\r\n    * ```\r\n    */\r\n    Engine.prototype.createBuildingTemplates = function (templates) {\r\n        return this.getFacade().sendNotification(app_const_1.default.CREATE_TEMPLATE_BUILDINGS, templates);\r\n    };\r\n    /**\r\n     * Returns all building's templates\r\n     *\r\n     * example.ts\r\n     * ```typescript\r\n     * Paradox.engine.getTemplateBuildings().then( (templates)=>{});\r\n     * ```\r\n     */\r\n    Engine.prototype.getTemplateBuildings = function () {\r\n        return this.getFacade().query(app_const_1.default.GET_TEMPLATES_BUILDINGS_QUERY);\r\n    };\r\n    /**\r\n     * Create resources\r\n     *\r\n     * example.ts\r\n     * ```typescript\r\n     * const resources = [{id:1, name: \"gold\"},{id:2, name: \"wood\"},{id:3, name: \"food\"}];\r\n     * Paradox.engine.createResources(resources)\r\n     * ```\r\n     */\r\n    Engine.prototype.createResources = function (resources) {\r\n        return this.getFacade().sendNotification(app_const_1.default.CREATE_RESOURCES, resources);\r\n    };\r\n    /**\r\n     * Returns all resources\r\n     *\r\n     * example.ts\r\n     * ```typescript\r\n     * Paradox.engine.getResources().then( (templates)=>{});\r\n     * ```\r\n     */\r\n    Engine.prototype.getResources = function () {\r\n        return this.getFacade().query(app_const_1.default.GET_RESOURCES_QUERY);\r\n    };\r\n    /**\r\n     * Adds city\r\n     *\r\n     * example.ts\r\n     * ```typescript\r\n    const cityData = {\r\n        id: 1,\r\n        name: \"Atlantis\",\r\n        buildings:[{tplID:1, level:2}],\r\n        wallet: [{resourceID: 1, amount: 100}]\r\n    };\r\n    * Paradox.engine.addCity(cityData);\r\n    * ```\r\n    */\r\n    Engine.prototype.addCity = function (city) {\r\n        return this.getFacade().sendNotification(app_const_1.default.ADD_CITY, city);\r\n    };\r\n    /**\r\n     * Create cities\r\n     *\r\n     * example.ts\r\n     * ```typescript\r\n     * const city1 = {id: 1, name: \"city1\", buildings:[{tplID:1, level:1}],wallet: [{resourceID: 1, amount: 100}]};\r\n     * const city2 = {id: 2, name: \"city2\", buildings:[{tplID:2, level:1}],wallet: [{resourceID: 2, amount: 100}]};\r\n     * const cities = [city1,city2];\r\n     * Paradox.engine.createCities(cities)\r\n     * ```\r\n     */\r\n    Engine.prototype.createCities = function (cities) {\r\n        return this.getFacade().sendNotification(app_const_1.default.CREATE_CITIES, cities);\r\n    };\r\n    /**\r\n     * Returns all cities\r\n     *\r\n     * example.ts\r\n     * ```typescript\r\n     * Paradox.engine.getCities().then( (templates)=>{});\r\n     * ```\r\n     */\r\n    Engine.prototype.getCities = function () {\r\n        return this.getFacade().query(app_const_1.default.GET_CITIES_QUERY);\r\n    };\r\n    /**\r\n     * Returns a city by its id (if exists)\r\n     *\r\n     * example.ts\r\n     * ```typescript\r\n     * Paradox.engine.getCityByID({id:1}).then( (city)=>{});\r\n     * ```\r\n     */\r\n    Engine.prototype.getCityByID = function (data) {\r\n        return this.getFacade().query(app_const_1.default.GET_CITY_QUERY, data);\r\n    };\r\n    /**\r\n     * Restores game data\r\n     *\r\n     * example.ts\r\n     * ```typescript\r\n     * const cities             = [... cities data];\r\n     * const resources          = [... resources data];\r\n     * const templateBuildings  = [... templates data];\r\n     * const data =  {cities resources, templateBuildings};\r\n     * Paradox.engine.restoreGameData(data);\r\n     * ```\r\n     */\r\n    Engine.prototype.restoreGameData = function (data) {\r\n        return this.getFacade().sendNotification(app_const_1.default.RESTORE_SAVED_DATA, data);\r\n    };\r\n    /**\r\n     * Saves and returns all game data\r\n     *\r\n     * example.ts\r\n     * ```typescript\r\n     * Paradox.engine.saveGameData().then( (gameData)=>{});\r\n     * ```\r\n     */\r\n    Engine.prototype.saveGameData = function () {\r\n        return this.getFacade().query(app_const_1.default.SAVE_GAME_DATA_QUERY);\r\n    };\r\n    return Engine;\r\n}(tiny_observer_1.Emitter));\r\nexports[\"default\"] = Engine;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/Engine.js?");

/***/ }),

/***/ "./dist/core/command/AddBuildingToCityCommand.js":
/*!*******************************************************!*\
  !*** ./dist/core/command/AddBuildingToCityCommand.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar app_const_1 = __webpack_require__(/*! ../ioc/app.const */ \"./dist/core/ioc/app.const.js\");\r\n/**\r\n * Adds a building to a city\r\n *\r\n * example.ts\r\n * ```typescript\r\n * const data = {cityID: 1, tplID: 1};\r\n * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.ADD_BUILDING_TO_CITY, data);\r\n * ```\r\n */\r\nvar AddBuildingToCityCommand = /** @class */ (function () {\r\n    function AddBuildingToCityCommand() {\r\n    }\r\n    AddBuildingToCityCommand.prototype.execute = function (notification) {\r\n        var facade = notification.getEmitter();\r\n        var data = notification.getPayload();\r\n        var tplRepo = facade.getProxy(app_const_1.default.TEMPLATE_BUILDING_REPOSITORY);\r\n        var cityRepo = facade.getProxy(app_const_1.default.CITY_REPOSITORY);\r\n        var tpl = tplRepo.getOneBy('id', data.tplID);\r\n        var city = cityRepo.getOneBy('id', data.cityID);\r\n        if (tpl === null || city === null)\r\n            return;\r\n        var factory = facade.getService(app_const_1.default.BUILDING_FACTORY);\r\n        city.buildings.push(factory.fromData({ tplID: tpl.id }));\r\n    };\r\n    return AddBuildingToCityCommand;\r\n}());\r\nexports[\"default\"] = AddBuildingToCityCommand;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/command/AddBuildingToCityCommand.js?");

/***/ }),

/***/ "./dist/core/command/AddCityCommand.js":
/*!*********************************************!*\
  !*** ./dist/core/command/AddCityCommand.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar app_const_1 = __webpack_require__(/*! ../ioc/app.const */ \"./dist/core/ioc/app.const.js\");\r\n/**\r\n * Adds city\r\n *\r\n * example.ts\r\n * ```typescript\r\n * const cityData = {\r\n        id: 1,\r\n        name: \"Atlantis\",\r\n        buildings:[{tplID:1, level:2}],\r\n        wallet: [{resourceID: 1, amount: 100}]\r\n    };\r\n * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.ADD_CITY, cityData)\r\n * ```\r\n */\r\nvar AddCityCommand = /** @class */ (function () {\r\n    function AddCityCommand() {\r\n    }\r\n    AddCityCommand.prototype.execute = function (notification) {\r\n        var facade = notification.getEmitter();\r\n        var data = notification.getPayload();\r\n        var proxy = facade.getProxy(app_const_1.default.CITY_REPOSITORY);\r\n        var factory = facade.getService(app_const_1.default.CITY_FACTORY);\r\n        proxy.add(factory.fromData(data));\r\n    };\r\n    return AddCityCommand;\r\n}());\r\nexports[\"default\"] = AddCityCommand;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/command/AddCityCommand.js?");

/***/ }),

/***/ "./dist/core/command/BuyBuildingCommand.js":
/*!*************************************************!*\
  !*** ./dist/core/command/BuyBuildingCommand.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar app_const_1 = __webpack_require__(/*! ../ioc/app.const */ \"./dist/core/ioc/app.const.js\");\r\n/**\r\n * Buys and adds a building to a city if city has enough resources\r\n *\r\n * example.ts\r\n * ```typescript\r\n * const data = {cityID: 1, tplID: 1};\r\n * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.BUY_BUILDING, data);\r\n * ```\r\n */\r\nvar BuyBuildingCommand = /** @class */ (function () {\r\n    function BuyBuildingCommand() {\r\n    }\r\n    BuyBuildingCommand.prototype.execute = function (notification) {\r\n        var facade = notification.getEmitter();\r\n        var data = notification.getPayload();\r\n        var cityRepo = facade.getProxy(app_const_1.default.CITY_REPOSITORY);\r\n        var tplRepo = facade.getProxy(app_const_1.default.TEMPLATE_BUILDING_REPOSITORY);\r\n        var tpl = tplRepo.getOneBy('id', data.tplID);\r\n        var city = cityRepo.getOneBy('id', data.cityID);\r\n        if (tpl === null || city === null)\r\n            return;\r\n        var factory = facade.getService(app_const_1.default.BUILDING_FACTORY);\r\n        // building is free\r\n        if (tpl.levels.length === 0 || data.freely) {\r\n            city.buildings.push(factory.fromData({ tplID: tpl.id }));\r\n            return;\r\n        }\r\n        var cost = tpl.levels[0].cost;\r\n        var wallet = city.wallet;\r\n        var paymentService = facade.getService(app_const_1.default.PAYMENT_SERVICE);\r\n        if (paymentService.pay(wallet, cost)) {\r\n            city.buildings.push(factory.fromData({ tplID: tpl.id }));\r\n        }\r\n    };\r\n    return BuyBuildingCommand;\r\n}());\r\nexports[\"default\"] = BuyBuildingCommand;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/command/BuyBuildingCommand.js?");

/***/ }),

/***/ "./dist/core/command/CreateCitiesCommand.js":
/*!**************************************************!*\
  !*** ./dist/core/command/CreateCitiesCommand.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar app_const_1 = __webpack_require__(/*! ../ioc/app.const */ \"./dist/core/ioc/app.const.js\");\r\n/**\r\n * Create cities\r\n *\r\n * example.ts\r\n * ```typescript\r\n * const city1 = {id: 1, name: \"city1\", buildings:[{tplID:1, level:1}],wallet: [{resourceID: 1, amount: 100}]};\r\n * const city2 = {id: 2, name: \"city2\", buildings:[{tplID:2, level:1}],wallet: [{resourceID: 2, amount: 100}]};\r\n * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.CREATE_CITIES, [city1, city2]);\r\n * ```\r\n */\r\nvar CreateCitiesCommand = /** @class */ (function () {\r\n    function CreateCitiesCommand() {\r\n    }\r\n    CreateCitiesCommand.prototype.execute = function (notification) {\r\n        var facade = notification.getEmitter();\r\n        var list = notification.getPayload();\r\n        var proxy = facade.getProxy(app_const_1.default.CITY_REPOSITORY);\r\n        var factory = facade.getService(app_const_1.default.CITY_FACTORY);\r\n        list.forEach(function (current) {\r\n            proxy.add(factory.fromData(current));\r\n        });\r\n    };\r\n    return CreateCitiesCommand;\r\n}());\r\nexports[\"default\"] = CreateCitiesCommand;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/command/CreateCitiesCommand.js?");

/***/ }),

/***/ "./dist/core/command/CreateResourcesCommand.js":
/*!*****************************************************!*\
  !*** ./dist/core/command/CreateResourcesCommand.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar app_const_1 = __webpack_require__(/*! ../ioc/app.const */ \"./dist/core/ioc/app.const.js\");\r\n/**\r\n * Create resources\r\n *\r\n * example.ts\r\n * ```typescript\r\n * const resources = [{id:1, name: \"gold\"},{id:2, name: \"wood\"},{id:3, name: \"food\"}];\r\n * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.CREATE_RESOURCES, resources);\r\n * ```\r\n */\r\nvar CreateResourcesCommand = /** @class */ (function () {\r\n    function CreateResourcesCommand() {\r\n    }\r\n    CreateResourcesCommand.prototype.execute = function (notification) {\r\n        var facade = notification.getEmitter();\r\n        var list = notification.getPayload();\r\n        var proxy = facade.getProxy(app_const_1.default.RESOURCE_REPOSITORY);\r\n        var factory = facade.getService(app_const_1.default.RESOURCE_FACTORY);\r\n        list.forEach(function (current) {\r\n            proxy.add(factory.fromData(current));\r\n        });\r\n    };\r\n    return CreateResourcesCommand;\r\n}());\r\nexports[\"default\"] = CreateResourcesCommand;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/command/CreateResourcesCommand.js?");

/***/ }),

/***/ "./dist/core/command/CreateTemplateBuildingsCommand.js":
/*!*************************************************************!*\
  !*** ./dist/core/command/CreateTemplateBuildingsCommand.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar app_const_1 = __webpack_require__(/*! ../ioc/app.const */ \"./dist/core/ioc/app.const.js\");\r\n/**\r\n * Create building's templates\r\n *\r\n * example.ts\r\n * ```typescript\r\n * const templates = [\r\n    {\r\n        id: 1,\r\n        name: \"Castle\",\r\n        levels: [\r\n            {level: 1, cost: [{resourceID: 1, amount: 100}], prod: [{resourceID: 2, amount: 100}], cons:[{resourceID: 2, amount: 2}], sold:[{resourceID: 1, amount: 50}]},\r\n            {level: 2, cost: [{resourceID: 1, amount: 200}], prod: [{resourceID: 2, amount: 200}], cons:[], sold:[]},\r\n        ]\r\n    },\r\n    {\r\n        id: 2,\r\n        name: \"Home\",\r\n        levels: []\r\n    },\r\n];\r\n * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.CREATE_TEMPLATE_BUILDINGS, templates);\r\n * ```\r\n */\r\nvar CreateTemplateBuildingsCommand = /** @class */ (function () {\r\n    function CreateTemplateBuildingsCommand() {\r\n    }\r\n    CreateTemplateBuildingsCommand.prototype.execute = function (notification) {\r\n        var facade = notification.getEmitter();\r\n        var list = notification.getPayload();\r\n        var templateProxy = facade.getProxy(app_const_1.default.TEMPLATE_BUILDING_REPOSITORY);\r\n        var factory = facade.getService(app_const_1.default.TEMPLATE_BUILDING_FACTORY);\r\n        list.forEach(function (current) {\r\n            templateProxy.add(factory.fromData(current));\r\n        });\r\n    };\r\n    return CreateTemplateBuildingsCommand;\r\n}());\r\nexports[\"default\"] = CreateTemplateBuildingsCommand;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/command/CreateTemplateBuildingsCommand.js?");

/***/ }),

/***/ "./dist/core/command/DoCycleCommand.js":
/*!*********************************************!*\
  !*** ./dist/core/command/DoCycleCommand.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\r\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\r\n        if (ar || !(i in from)) {\r\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\r\n            ar[i] = from[i];\r\n        }\r\n    }\r\n    return to.concat(ar || Array.prototype.slice.call(from));\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar app_const_1 = __webpack_require__(/*! ../ioc/app.const */ \"./dist/core/ioc/app.const.js\");\r\n/**\r\n * Processes a cycle. A cycle means that productions are added\r\n * to cities's wallets and consumptions are removed from them too.\r\n *\r\n * example.ts\r\n * ```typescript\r\n * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.DO_CYCLE);\r\n * ```\r\n */\r\nvar DoCycleCommand = /** @class */ (function () {\r\n    function DoCycleCommand() {\r\n    }\r\n    DoCycleCommand.prototype.execute = function (notification) {\r\n        var facade = notification.getEmitter();\r\n        var proxy = facade.getProxy(app_const_1.default.CITY_REPOSITORY);\r\n        proxy.getAll().forEach(function (city) {\r\n            // production\r\n            city.buildings.forEach(function (building) {\r\n                if (building.level === null)\r\n                    return;\r\n                building.level.prod.get().forEach(function (prod) {\r\n                    var cityQuantity = city.wallet.get().find(function (q) { return q.resourceID === prod.resourceID; }) || null;\r\n                    if (cityQuantity === null) {\r\n                        city.wallet.set(__spreadArray(__spreadArray([], city.wallet.get(), true), [\r\n                            prod.clone()\r\n                        ], false));\r\n                    }\r\n                    else {\r\n                        cityQuantity.amount += prod.amount;\r\n                    }\r\n                });\r\n            });\r\n            // maintenance\r\n            city.buildings.forEach(function (building) {\r\n                if (building.level === null)\r\n                    return;\r\n                building.level.cons.get().forEach(function (cons) {\r\n                    var cityQuantity = city.wallet.get().find(function (q) { return q.resourceID === cons.resourceID; }) || null;\r\n                    if (cityQuantity === null) {\r\n                        var empty = cons.clone();\r\n                        empty.amount = 0;\r\n                        city.wallet.set(__spreadArray(__spreadArray([], city.wallet.get(), true), [empty], false));\r\n                    }\r\n                    cityQuantity.amount -= cons.amount;\r\n                });\r\n            });\r\n        });\r\n    };\r\n    return DoCycleCommand;\r\n}());\r\nexports[\"default\"] = DoCycleCommand;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/command/DoCycleCommand.js?");

/***/ }),

/***/ "./dist/core/command/GetCitiesQuery.js":
/*!*********************************************!*\
  !*** ./dist/core/command/GetCitiesQuery.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar app_const_1 = __webpack_require__(/*! ../ioc/app.const */ \"./dist/core/ioc/app.const.js\");\r\n/**\r\n * Returns all the cities\r\n *\r\n * example.ts\r\n * ```typescript\r\n * Paradox.engine.getFacade().query(Paradox.appConstants.GET_CITIES_QUERY).then( (cities)=>{});\r\n * ```\r\n */\r\nvar GetCitiesQuery = /** @class */ (function () {\r\n    function GetCitiesQuery() {\r\n    }\r\n    GetCitiesQuery.prototype.execute = function (notification) {\r\n        var facade = notification.getEmitter();\r\n        var proxy = facade.getProxy(app_const_1.default.CITY_REPOSITORY);\r\n        return proxy.getAll();\r\n    };\r\n    return GetCitiesQuery;\r\n}());\r\nexports[\"default\"] = GetCitiesQuery;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/command/GetCitiesQuery.js?");

/***/ }),

/***/ "./dist/core/command/GetCityQuery.js":
/*!*******************************************!*\
  !*** ./dist/core/command/GetCityQuery.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar app_const_1 = __webpack_require__(/*! ../ioc/app.const */ \"./dist/core/ioc/app.const.js\");\r\n/**\r\n * Returns a city by its id if exists\r\n *\r\n * example.ts\r\n * ```typescript\r\n * Paradox.engine.getFacade().query(Paradox.appConstants.GET_CITY_QUERY, {id:1}).then( (city)=>{});\r\n * ```\r\n */\r\nvar GetCityQuery = /** @class */ (function () {\r\n    function GetCityQuery() {\r\n    }\r\n    GetCityQuery.prototype.execute = function (notification) {\r\n        var facade = notification.getEmitter();\r\n        var proxy = facade.getProxy(app_const_1.default.CITY_REPOSITORY);\r\n        var payload = notification.getPayload();\r\n        return proxy.getOneBy('id', payload.id);\r\n    };\r\n    return GetCityQuery;\r\n}());\r\nexports[\"default\"] = GetCityQuery;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/command/GetCityQuery.js?");

/***/ }),

/***/ "./dist/core/command/GetResourcesQuery.js":
/*!************************************************!*\
  !*** ./dist/core/command/GetResourcesQuery.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar app_const_1 = __webpack_require__(/*! ../ioc/app.const */ \"./dist/core/ioc/app.const.js\");\r\n/**\r\n * Returns all resources\r\n *\r\n * example.ts\r\n * ```typescript\r\n * Paradox.engine.getFacade().query(Paradox.appConstants.GET_RESOURCES_QUERY).then( (resources)=>{});\r\n * ```\r\n */\r\nvar GetResourcesQuery = /** @class */ (function () {\r\n    function GetResourcesQuery() {\r\n    }\r\n    GetResourcesQuery.prototype.execute = function (notification) {\r\n        var facade = notification.getEmitter();\r\n        var proxy = facade.getProxy(app_const_1.default.RESOURCE_REPOSITORY);\r\n        return proxy.getAll();\r\n    };\r\n    return GetResourcesQuery;\r\n}());\r\nexports[\"default\"] = GetResourcesQuery;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/command/GetResourcesQuery.js?");

/***/ }),

/***/ "./dist/core/command/GetTemplateBuildingsQuery.js":
/*!********************************************************!*\
  !*** ./dist/core/command/GetTemplateBuildingsQuery.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar app_const_1 = __webpack_require__(/*! ../ioc/app.const */ \"./dist/core/ioc/app.const.js\");\r\n/**\r\n * Returns all building's templates\r\n *\r\n * example.ts\r\n * ```typescript\r\n * Paradox.engine.getFacade().query(Paradox.appConstants.GET_TEMPLATES_BUILDINGS_QUERY).then( (templates)=>{});\r\n * ```\r\n */\r\nvar GetTemplateBuildingsQuery = /** @class */ (function () {\r\n    function GetTemplateBuildingsQuery() {\r\n    }\r\n    GetTemplateBuildingsQuery.prototype.execute = function (notification) {\r\n        var facade = notification.getEmitter();\r\n        var proxy = facade.getProxy(app_const_1.default.TEMPLATE_BUILDING_REPOSITORY);\r\n        return proxy.getAll();\r\n    };\r\n    return GetTemplateBuildingsQuery;\r\n}());\r\nexports[\"default\"] = GetTemplateBuildingsQuery;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/command/GetTemplateBuildingsQuery.js?");

/***/ }),

/***/ "./dist/core/command/RemoveBuildingCommand.js":
/*!****************************************************!*\
  !*** ./dist/core/command/RemoveBuildingCommand.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar app_const_1 = __webpack_require__(/*! ../ioc/app.const */ \"./dist/core/ioc/app.const.js\");\r\n/**\r\n * Removes a building with a specific id from a city (it if exists)\r\n *\r\n * example.ts\r\n * ```typescript\r\n * const data = {cityID: 1, id:1};\r\n * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.REMOVE_BUILDING_FROM_CITY, data);\r\n * ```\r\n */\r\nvar RemoveBuildingCommand = /** @class */ (function () {\r\n    function RemoveBuildingCommand() {\r\n    }\r\n    RemoveBuildingCommand.prototype.execute = function (notification) {\r\n        var facade = notification.getEmitter();\r\n        var data = notification.getPayload();\r\n        var cityRepo = facade.getProxy(app_const_1.default.CITY_REPOSITORY);\r\n        var city = cityRepo.getOneBy('id', data.cityID);\r\n        var target = city.buildings.find(function (b) { return b.id === data.id; }) || null;\r\n        if (!city.buildings.includes(target))\r\n            return;\r\n        var pos = city.buildings.indexOf(target);\r\n        city.buildings.splice(pos, 1);\r\n    };\r\n    return RemoveBuildingCommand;\r\n}());\r\nexports[\"default\"] = RemoveBuildingCommand;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/command/RemoveBuildingCommand.js?");

/***/ }),

/***/ "./dist/core/command/RestoreSavedDataCommand.js":
/*!******************************************************!*\
  !*** ./dist/core/command/RestoreSavedDataCommand.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar app_const_1 = __webpack_require__(/*! ../ioc/app.const */ \"./dist/core/ioc/app.const.js\");\r\n/**\r\n * Restores game data\r\n *\r\n * example.ts\r\n * ```typescript\r\n * const cities             = [... cities data];\r\n * const resources          = [... resources data];\r\n * const templateBuildings  = [... templates data];\r\n * const data =  {cities resources, templateBuildings};\r\n * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.RESTORE_SAVED_DATA, data);\r\n * ```\r\n */\r\nvar RestoreSavedDataCommand = /** @class */ (function () {\r\n    function RestoreSavedDataCommand() {\r\n    }\r\n    RestoreSavedDataCommand.prototype.execute = function (notification) {\r\n        var facade = notification.getEmitter();\r\n        var configuration = notification.getPayload();\r\n        facade.sendNotification(app_const_1.default.CREATE_RESOURCES, configuration.resources);\r\n        facade.sendNotification(app_const_1.default.CREATE_TEMPLATE_BUILDINGS, configuration.templateBuildings);\r\n        facade.sendNotification(app_const_1.default.CREATE_CITIES, configuration.cities);\r\n    };\r\n    return RestoreSavedDataCommand;\r\n}());\r\nexports[\"default\"] = RestoreSavedDataCommand;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/command/RestoreSavedDataCommand.js?");

/***/ }),

/***/ "./dist/core/command/SaveGameDataQuery.js":
/*!************************************************!*\
  !*** ./dist/core/command/SaveGameDataQuery.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar app_const_1 = __webpack_require__(/*! ../ioc/app.const */ \"./dist/core/ioc/app.const.js\");\r\n/**\r\n * Saves and returns all game data\r\n *\r\n * example.ts\r\n * ```typescript\r\n * Paradox.engine.getFacade().query(Paradox.appConstants.SAVE_GAME_DATA_QUERY).then( (gameData)=>{});\r\n * ```\r\n */\r\nvar SaveGameDataQuery = /** @class */ (function () {\r\n    function SaveGameDataQuery() {\r\n    }\r\n    SaveGameDataQuery.prototype.execute = function (notification) {\r\n        var facade = notification.getEmitter();\r\n        var data = notification.getPayload();\r\n        var tplRepo = facade.getProxy(app_const_1.default.TEMPLATE_BUILDING_REPOSITORY);\r\n        var citRepo = facade.getProxy(app_const_1.default.CITY_REPOSITORY);\r\n        var resRepo = facade.getProxy(app_const_1.default.RESOURCE_REPOSITORY);\r\n        var service = facade.getService(app_const_1.default.SERIALIZER_SERVICE);\r\n        return service.serialize(citRepo.getAll(), tplRepo.getAll(), resRepo.getAll(), data.format);\r\n    };\r\n    return SaveGameDataQuery;\r\n}());\r\nexports[\"default\"] = SaveGameDataQuery;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/command/SaveGameDataQuery.js?");

/***/ }),

/***/ "./dist/core/command/SellBuildingCommand.js":
/*!**************************************************!*\
  !*** ./dist/core/command/SellBuildingCommand.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar app_const_1 = __webpack_require__(/*! ../ioc/app.const */ \"./dist/core/ioc/app.const.js\");\r\n/**\r\n * Sells a building with a specific id and remove it from a city (it if exists)\r\n *\r\n * example.ts\r\n * ```typescript\r\n * const data = {cityID:1, id:1};\r\n * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.SELL_BUILDING, data);\r\n * ```\r\n */\r\nvar SellBuildingCommand = /** @class */ (function () {\r\n    function SellBuildingCommand() {\r\n    }\r\n    SellBuildingCommand.prototype.execute = function (notification) {\r\n        var facade = notification.getEmitter();\r\n        var data = notification.getPayload();\r\n        var cityRepo = facade.getProxy(app_const_1.default.CITY_REPOSITORY);\r\n        var city = cityRepo.getOneBy('id', data.cityID);\r\n        var target = city.buildings.find(function (b) { return b.id === data.id; }) || null;\r\n        if (!city.buildings.includes(target))\r\n            return;\r\n        target.level.sold.get().forEach(function (quantity) {\r\n            var wallet = city.wallet.get();\r\n            var eq = wallet.find(function (q) { return q.resourceID === quantity.resourceID; });\r\n            if (!eq)\r\n                wallet.push(quantity.clone());\r\n            else\r\n                eq.amount += quantity.amount;\r\n            city.wallet.set(wallet);\r\n        });\r\n        facade.sendNotification(app_const_1.default.REMOVE_BUILDING_FROM_CITY, data);\r\n    };\r\n    return SellBuildingCommand;\r\n}());\r\nexports[\"default\"] = SellBuildingCommand;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/command/SellBuildingCommand.js?");

/***/ }),

/***/ "./dist/core/command/UpgradeBuildingCommand.js":
/*!*****************************************************!*\
  !*** ./dist/core/command/UpgradeBuildingCommand.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar app_const_1 = __webpack_require__(/*! ../ioc/app.const */ \"./dist/core/ioc/app.const.js\");\r\n/**\r\n * Upgrades a building with a specific id (it if exists)\r\n *\r\n * example.ts\r\n * ```typescript\r\n * const data = {cityID: 1, id:1};\r\n * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.UPGRADE_BUILDING, data);\r\n * ```\r\n */\r\nvar UpgradeBuildingCommand = /** @class */ (function () {\r\n    function UpgradeBuildingCommand() {\r\n    }\r\n    UpgradeBuildingCommand.prototype.execute = function (notification) {\r\n        var facade = notification.getEmitter();\r\n        var data = notification.getPayload();\r\n        var tplRepo = facade.getProxy(app_const_1.default.TEMPLATE_BUILDING_REPOSITORY);\r\n        var cityRepo = facade.getProxy(app_const_1.default.CITY_REPOSITORY);\r\n        var city = cityRepo.getOneBy('id', data.cityID);\r\n        var target = city.buildings.find(function (b) { return b.id === data.id; }) || null;\r\n        var tplID = target === null ? -1 : target.tplBuildingID;\r\n        var tpl = tplRepo.getOneBy('id', tplID);\r\n        if (tpl === null || city === null || target === null)\r\n            return;\r\n        if (!city.buildings.includes(target))\r\n            return;\r\n        var nextLevel = tpl.levels.find(function (l) { return l.level === target.level.level + 1; }) || null;\r\n        if (nextLevel === null)\r\n            return;\r\n        if (data.freely === true) {\r\n            target.level = nextLevel.clone();\r\n            return;\r\n        }\r\n        var cost = nextLevel.cost;\r\n        var wallet = city.wallet;\r\n        var paymentService = facade.getService(app_const_1.default.PAYMENT_SERVICE);\r\n        if (paymentService.pay(wallet, cost)) {\r\n            target.level = nextLevel.clone();\r\n        }\r\n    };\r\n    return UpgradeBuildingCommand;\r\n}());\r\nexports[\"default\"] = UpgradeBuildingCommand;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/command/UpgradeBuildingCommand.js?");

/***/ }),

/***/ "./dist/core/ioc/app.const.js":
/*!************************************!*\
  !*** ./dist/core/ioc/app.const.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar AppConst = /** @class */ (function () {\r\n    function AppConst() {\r\n    }\r\n    // facade\r\n    AppConst.APP_FACADE = \"AppFacade\";\r\n    // model\r\n    AppConst.GAME_STORE_MODEL = \"GameStoreModel\";\r\n    // commands\r\n    AppConst.SELL_BUILDING = \"SellBuildingCommand\";\r\n    AppConst.REMOVE_BUILDING_FROM_CITY = \"RemoveBuildingFromCityCommand\";\r\n    AppConst.ADD_BUILDING_TO_CITY = \"AddBuildingToCityCommand\";\r\n    AppConst.UPGRADE_BUILDING = \"UpgradeBuildingCommand\";\r\n    AppConst.ADD_CITY = \"AddCityCommand\";\r\n    AppConst.BUY_BUILDING = \"BuyBuildingCommand\";\r\n    AppConst.CREATE_RESOURCES = \"CreateResourcesCommand\";\r\n    AppConst.CREATE_CITIES = \"CreateCitiesCommand\";\r\n    AppConst.CREATE_TEMPLATE_BUILDINGS = \"CreateTemplateBuildingsCommand\";\r\n    AppConst.RESTORE_SAVED_DATA = \"RestoreSavedDataCommand\";\r\n    AppConst.DO_CYCLE = \"DoCycleCommand\";\r\n    // queries\r\n    AppConst.GET_CITY_QUERY = \"GetCityQuery\";\r\n    AppConst.GET_CITIES_QUERY = \"GetCitiesQuery\";\r\n    AppConst.GET_RESOURCES_QUERY = \"GetResourcesQuery\";\r\n    AppConst.GET_TEMPLATES_BUILDINGS_QUERY = \"GetTemplateBuildingsQuery\";\r\n    AppConst.SAVE_GAME_DATA_QUERY = \"SaveGameDataQuery\";\r\n    // repositories\r\n    AppConst.CITY_REPOSITORY = \"CityRepository\";\r\n    AppConst.RESOURCE_REPOSITORY = \"ResourceRepository\";\r\n    AppConst.TEMPLATE_BUILDING_REPOSITORY = \"TemplateBuildingRepository\";\r\n    AppConst.BASE_REPOSITORY = \"BaseRepository\";\r\n    // factories\r\n    AppConst.BUILDING_FACTORY = \"BuildingFactory\";\r\n    AppConst.CITY_FACTORY = \"CityFactory\";\r\n    AppConst.RESOURCE_FACTORY = \"ResourceFactory\";\r\n    AppConst.QUANTITY_FACTORY = \"QuantityFactory\";\r\n    AppConst.QUANTITY_LIST_FACTORY = \"QuantityListFactory\";\r\n    AppConst.BUILDING_LEVEL_FACTORY = \"BuildingLevelFactory\";\r\n    AppConst.TEMPLATE_BUILDING_FACTORY = \"TemplateBuildingFactory\";\r\n    // services\r\n    AppConst.UID_SERVICE = \"UIDService\";\r\n    AppConst.PAYMENT_SERVICE = \"PaymentService\";\r\n    AppConst.SERIALIZER_SERVICE = \"SerializerService\";\r\n    return AppConst;\r\n}());\r\nexports[\"default\"] = AppConst;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/ioc/app.const.js?");

/***/ }),

/***/ "./dist/core/ioc/config.js":
/*!*********************************!*\
  !*** ./dist/core/ioc/config.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.configFacade = exports.configIOC = void 0;\r\nvar coffe_maker_1 = __webpack_require__(/*! @thetinyspark/coffe-maker */ \"./node_modules/@thetinyspark/coffe-maker/dist/index.js\");\r\nvar app_const_1 = __webpack_require__(/*! ./app.const */ \"./dist/core/ioc/app.const.js\");\r\nvar AddBuildingToCityCommand_1 = __webpack_require__(/*! ../command/AddBuildingToCityCommand */ \"./dist/core/command/AddBuildingToCityCommand.js\");\r\nvar AddCityCommand_1 = __webpack_require__(/*! ../command/AddCityCommand */ \"./dist/core/command/AddCityCommand.js\");\r\nvar CreateResourcesCommand_1 = __webpack_require__(/*! ../command/CreateResourcesCommand */ \"./dist/core/command/CreateResourcesCommand.js\");\r\nvar CreateTemplateBuildingsCommand_1 = __webpack_require__(/*! ../command/CreateTemplateBuildingsCommand */ \"./dist/core/command/CreateTemplateBuildingsCommand.js\");\r\nvar DoCycleCommand_1 = __webpack_require__(/*! ../command/DoCycleCommand */ \"./dist/core/command/DoCycleCommand.js\");\r\nvar GetCitiesQuery_1 = __webpack_require__(/*! ../command/GetCitiesQuery */ \"./dist/core/command/GetCitiesQuery.js\");\r\nvar GetResourcesQuery_1 = __webpack_require__(/*! ../command/GetResourcesQuery */ \"./dist/core/command/GetResourcesQuery.js\");\r\nvar GetTemplateBuildingsQuery_1 = __webpack_require__(/*! ../command/GetTemplateBuildingsQuery */ \"./dist/core/command/GetTemplateBuildingsQuery.js\");\r\nvar CityRepository_1 = __webpack_require__(/*! ../model/repository/CityRepository */ \"./dist/core/model/repository/CityRepository.js\");\r\nvar ResourceRepository_1 = __webpack_require__(/*! ../model/repository/ResourceRepository */ \"./dist/core/model/repository/ResourceRepository.js\");\r\nvar TemplateBuildingRepository_1 = __webpack_require__(/*! ../model/repository/TemplateBuildingRepository */ \"./dist/core/model/repository/TemplateBuildingRepository.js\");\r\nvar Repository_1 = __webpack_require__(/*! ../model/repository/Repository */ \"./dist/core/model/repository/Repository.js\");\r\nvar BuyBuildingCommand_1 = __webpack_require__(/*! ../command/BuyBuildingCommand */ \"./dist/core/command/BuyBuildingCommand.js\");\r\nvar UpgradeBuildingCommand_1 = __webpack_require__(/*! ../command/UpgradeBuildingCommand */ \"./dist/core/command/UpgradeBuildingCommand.js\");\r\nvar BuildingFactory_1 = __webpack_require__(/*! ../service/factory/BuildingFactory */ \"./dist/core/service/factory/BuildingFactory.js\");\r\nvar CityFactory_1 = __webpack_require__(/*! ../service/factory/CityFactory */ \"./dist/core/service/factory/CityFactory.js\");\r\nvar ResourceFactory_1 = __webpack_require__(/*! ../service/factory/ResourceFactory */ \"./dist/core/service/factory/ResourceFactory.js\");\r\nvar QuantityFactory_1 = __webpack_require__(/*! ../service/factory/QuantityFactory */ \"./dist/core/service/factory/QuantityFactory.js\");\r\nvar QuantityListFactory_1 = __webpack_require__(/*! ../service/factory/QuantityListFactory */ \"./dist/core/service/factory/QuantityListFactory.js\");\r\nvar BuildingLevelFactory_1 = __webpack_require__(/*! ../service/factory/BuildingLevelFactory */ \"./dist/core/service/factory/BuildingLevelFactory.js\");\r\nvar TemplateBuildingFactory_1 = __webpack_require__(/*! ../service/factory/TemplateBuildingFactory */ \"./dist/core/service/factory/TemplateBuildingFactory.js\");\r\nvar PaymentService_1 = __webpack_require__(/*! ../service/PaymentService */ \"./dist/core/service/PaymentService.js\");\r\nvar SerializerService_1 = __webpack_require__(/*! ../service/SerializerService */ \"./dist/core/service/SerializerService.js\");\r\nvar SaveGameDataQuery_1 = __webpack_require__(/*! ../command/SaveGameDataQuery */ \"./dist/core/command/SaveGameDataQuery.js\");\r\nvar CreateCitiesCommand_1 = __webpack_require__(/*! ../command/CreateCitiesCommand */ \"./dist/core/command/CreateCitiesCommand.js\");\r\nvar RestoreSavedDataCommand_1 = __webpack_require__(/*! ../command/RestoreSavedDataCommand */ \"./dist/core/command/RestoreSavedDataCommand.js\");\r\nvar GetCityQuery_1 = __webpack_require__(/*! ../command/GetCityQuery */ \"./dist/core/command/GetCityQuery.js\");\r\nvar RemoveBuildingCommand_1 = __webpack_require__(/*! ../command/RemoveBuildingCommand */ \"./dist/core/command/RemoveBuildingCommand.js\");\r\nvar SellBuildingCommand_1 = __webpack_require__(/*! ../command/SellBuildingCommand */ \"./dist/core/command/SellBuildingCommand.js\");\r\nvar UIDService_1 = __webpack_require__(/*! ../service/UIDService */ \"./dist/core/service/UIDService.js\");\r\nfunction configIOC(container) {\r\n    container.reset();\r\n    container.register(app_const_1.default.GAME_STORE_MODEL, function () { return new coffe_maker_1.StoreModel(); }, true);\r\n    container.register(app_const_1.default.APP_FACADE, function () { return new coffe_maker_1.Facade(); }, true);\r\n    container.register(app_const_1.default.BUY_BUILDING, function () { return new BuyBuildingCommand_1.default(); });\r\n    container.register(app_const_1.default.ADD_BUILDING_TO_CITY, function () { return new AddBuildingToCityCommand_1.default(); });\r\n    container.register(app_const_1.default.SELL_BUILDING, function () { return new SellBuildingCommand_1.default(); });\r\n    container.register(app_const_1.default.REMOVE_BUILDING_FROM_CITY, function () { return new RemoveBuildingCommand_1.default(); });\r\n    container.register(app_const_1.default.UPGRADE_BUILDING, function () { return new UpgradeBuildingCommand_1.default(); });\r\n    container.register(app_const_1.default.ADD_CITY, function () { return new AddCityCommand_1.default(); });\r\n    container.register(app_const_1.default.CREATE_CITIES, function () { return new CreateCitiesCommand_1.default(); });\r\n    container.register(app_const_1.default.CREATE_RESOURCES, function () { return new CreateResourcesCommand_1.default(); });\r\n    container.register(app_const_1.default.RESTORE_SAVED_DATA, function () { return new RestoreSavedDataCommand_1.default(); });\r\n    container.register(app_const_1.default.CREATE_TEMPLATE_BUILDINGS, function () { return new CreateTemplateBuildingsCommand_1.default(); });\r\n    container.register(app_const_1.default.DO_CYCLE, function () { return new DoCycleCommand_1.default(); });\r\n    container.register(app_const_1.default.GET_CITIES_QUERY, function () { return new GetCitiesQuery_1.default(); });\r\n    container.register(app_const_1.default.GET_CITY_QUERY, function () { return new GetCityQuery_1.default(); });\r\n    container.register(app_const_1.default.GET_RESOURCES_QUERY, function () { return new GetResourcesQuery_1.default(); });\r\n    container.register(app_const_1.default.SAVE_GAME_DATA_QUERY, function () { return new SaveGameDataQuery_1.default(); });\r\n    container.register(app_const_1.default.GET_TEMPLATES_BUILDINGS_QUERY, function () { return new GetTemplateBuildingsQuery_1.default(); });\r\n    container.register(app_const_1.default.CITY_REPOSITORY, function () { return new CityRepository_1.default(container.resolve(app_const_1.default.GAME_STORE_MODEL), \"cities\"); }, true);\r\n    container.register(app_const_1.default.TEMPLATE_BUILDING_REPOSITORY, function () { return new TemplateBuildingRepository_1.default(container.resolve(app_const_1.default.GAME_STORE_MODEL), \"templateBuildings\"); }, true);\r\n    container.register(app_const_1.default.RESOURCE_REPOSITORY, function () { return new ResourceRepository_1.default(container.resolve(app_const_1.default.GAME_STORE_MODEL), \"resources\"); }, true);\r\n    container.register(app_const_1.default.BASE_REPOSITORY, function () { return new Repository_1.default(container.resolve(app_const_1.default.GAME_STORE_MODEL), \"data\"); }, true);\r\n    container.register(app_const_1.default.BUILDING_FACTORY, function () { return new BuildingFactory_1.default(container.resolve(app_const_1.default.TEMPLATE_BUILDING_REPOSITORY), container.resolve(app_const_1.default.UID_SERVICE)); }, true);\r\n    container.register(app_const_1.default.CITY_FACTORY, function () {\r\n        return new CityFactory_1.default(container.resolve(app_const_1.default.BUILDING_FACTORY), container.resolve(app_const_1.default.QUANTITY_LIST_FACTORY), container.resolve(app_const_1.default.UID_SERVICE));\r\n    }, true);\r\n    container.register(app_const_1.default.QUANTITY_LIST_FACTORY, function () {\r\n        return new QuantityListFactory_1.default(container.resolve(app_const_1.default.QUANTITY_FACTORY));\r\n    }, true);\r\n    container.register(app_const_1.default.BUILDING_LEVEL_FACTORY, function () {\r\n        return new BuildingLevelFactory_1.default(container.resolve(app_const_1.default.QUANTITY_LIST_FACTORY));\r\n    }, true);\r\n    container.register(app_const_1.default.TEMPLATE_BUILDING_FACTORY, function () {\r\n        return new TemplateBuildingFactory_1.default(container.resolve(app_const_1.default.BUILDING_LEVEL_FACTORY), container.resolve(app_const_1.default.UID_SERVICE));\r\n    }, true);\r\n    container.register(app_const_1.default.QUANTITY_FACTORY, function () {\r\n        return new QuantityFactory_1.default(container.resolve(app_const_1.default.RESOURCE_REPOSITORY));\r\n    }, true);\r\n    container.register(app_const_1.default.RESOURCE_FACTORY, function () { return new ResourceFactory_1.default(container.resolve(app_const_1.default.UID_SERVICE)); }, true);\r\n    container.register(app_const_1.default.PAYMENT_SERVICE, function () { return new PaymentService_1.default(); }, true);\r\n    container.register(app_const_1.default.SERIALIZER_SERVICE, function () { return new SerializerService_1.default(); }, true);\r\n    container.register(app_const_1.default.UID_SERVICE, function () { return new UIDService_1.default(); }, true);\r\n    return container;\r\n}\r\nexports.configIOC = configIOC;\r\nfunction configFacade(container) {\r\n    var facade = container.resolve(app_const_1.default.APP_FACADE);\r\n    facade.registerCommand(app_const_1.default.SELL_BUILDING, container.get(app_const_1.default.SELL_BUILDING));\r\n    facade.registerCommand(app_const_1.default.REMOVE_BUILDING_FROM_CITY, container.get(app_const_1.default.REMOVE_BUILDING_FROM_CITY));\r\n    facade.registerCommand(app_const_1.default.UPGRADE_BUILDING, container.get(app_const_1.default.UPGRADE_BUILDING));\r\n    facade.registerCommand(app_const_1.default.ADD_BUILDING_TO_CITY, container.get(app_const_1.default.ADD_BUILDING_TO_CITY));\r\n    facade.registerCommand(app_const_1.default.BUY_BUILDING, container.get(app_const_1.default.BUY_BUILDING));\r\n    facade.registerCommand(app_const_1.default.ADD_CITY, container.get(app_const_1.default.ADD_CITY));\r\n    facade.registerCommand(app_const_1.default.CREATE_CITIES, container.get(app_const_1.default.CREATE_CITIES));\r\n    facade.registerCommand(app_const_1.default.CREATE_RESOURCES, container.get(app_const_1.default.CREATE_RESOURCES));\r\n    facade.registerCommand(app_const_1.default.RESTORE_SAVED_DATA, container.get(app_const_1.default.RESTORE_SAVED_DATA));\r\n    facade.registerCommand(app_const_1.default.CREATE_TEMPLATE_BUILDINGS, container.get(app_const_1.default.CREATE_TEMPLATE_BUILDINGS));\r\n    facade.registerCommand(app_const_1.default.DO_CYCLE, container.get(app_const_1.default.DO_CYCLE));\r\n    facade.registerCommand(app_const_1.default.GET_CITIES_QUERY, container.get(app_const_1.default.GET_CITIES_QUERY));\r\n    facade.registerCommand(app_const_1.default.GET_CITY_QUERY, container.get(app_const_1.default.GET_CITY_QUERY));\r\n    facade.registerCommand(app_const_1.default.GET_RESOURCES_QUERY, container.get(app_const_1.default.GET_RESOURCES_QUERY));\r\n    facade.registerCommand(app_const_1.default.GET_TEMPLATES_BUILDINGS_QUERY, container.get(app_const_1.default.GET_TEMPLATES_BUILDINGS_QUERY));\r\n    facade.registerCommand(app_const_1.default.SAVE_GAME_DATA_QUERY, container.get(app_const_1.default.SAVE_GAME_DATA_QUERY));\r\n    facade.registerProxy(app_const_1.default.CITY_REPOSITORY, container.resolve(app_const_1.default.CITY_REPOSITORY));\r\n    facade.registerProxy(app_const_1.default.TEMPLATE_BUILDING_REPOSITORY, container.resolve(app_const_1.default.TEMPLATE_BUILDING_REPOSITORY));\r\n    facade.registerProxy(app_const_1.default.CITY_REPOSITORY, container.resolve(app_const_1.default.CITY_REPOSITORY));\r\n    facade.registerProxy(app_const_1.default.RESOURCE_REPOSITORY, container.resolve(app_const_1.default.RESOURCE_REPOSITORY));\r\n    facade.registerService(app_const_1.default.BUILDING_FACTORY, container.resolve(app_const_1.default.BUILDING_FACTORY));\r\n    facade.registerService(app_const_1.default.CITY_FACTORY, container.resolve(app_const_1.default.CITY_FACTORY));\r\n    facade.registerService(app_const_1.default.RESOURCE_FACTORY, container.resolve(app_const_1.default.RESOURCE_FACTORY));\r\n    facade.registerService(app_const_1.default.QUANTITY_FACTORY, container.resolve(app_const_1.default.QUANTITY_FACTORY));\r\n    facade.registerService(app_const_1.default.QUANTITY_LIST_FACTORY, container.resolve(app_const_1.default.QUANTITY_LIST_FACTORY));\r\n    facade.registerService(app_const_1.default.BUILDING_LEVEL_FACTORY, container.resolve(app_const_1.default.BUILDING_LEVEL_FACTORY));\r\n    facade.registerService(app_const_1.default.TEMPLATE_BUILDING_FACTORY, container.resolve(app_const_1.default.TEMPLATE_BUILDING_FACTORY));\r\n    facade.registerService(app_const_1.default.PAYMENT_SERVICE, container.resolve(app_const_1.default.PAYMENT_SERVICE));\r\n    facade.registerService(app_const_1.default.SERIALIZER_SERVICE, container.resolve(app_const_1.default.SERIALIZER_SERVICE));\r\n    facade.registerService(app_const_1.default.UID_SERVICE, container.resolve(app_const_1.default.UID_SERVICE));\r\n    return facade;\r\n}\r\nexports.configFacade = configFacade;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/ioc/config.js?");

/***/ }),

/***/ "./dist/core/model/repository/CityRepository.js":
/*!******************************************************!*\
  !*** ./dist/core/model/repository/CityRepository.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Repository_1 = __webpack_require__(/*! ./Repository */ \"./dist/core/model/repository/Repository.js\");\r\nvar CityRepository = /** @class */ (function (_super) {\r\n    __extends(CityRepository, _super);\r\n    function CityRepository() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    return CityRepository;\r\n}(Repository_1.default));\r\nexports[\"default\"] = CityRepository;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/model/repository/CityRepository.js?");

/***/ }),

/***/ "./dist/core/model/repository/Repository.js":
/*!**************************************************!*\
  !*** ./dist/core/model/repository/Repository.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar coffe_maker_1 = __webpack_require__(/*! @thetinyspark/coffe-maker */ \"./node_modules/@thetinyspark/coffe-maker/dist/index.js\");\r\nvar Repository = /** @class */ (function (_super) {\r\n    __extends(Repository, _super);\r\n    function Repository(storeModel, key) {\r\n        if (storeModel === void 0) { storeModel = new coffe_maker_1.Model(); }\r\n        if (key === void 0) { key = \"data\"; }\r\n        var _this = _super.call(this) || this;\r\n        _this._state = null;\r\n        _this._key = \"data\";\r\n        _this._key = key;\r\n        _this._state = storeModel;\r\n        _this.reset();\r\n        return _this;\r\n    }\r\n    Repository.prototype.reset = function () {\r\n        var save = {};\r\n        save[this._key] = new Array();\r\n        this._state.setState(save);\r\n    };\r\n    Repository.prototype.add = function (obj) {\r\n        var data = this.getAll();\r\n        data.push(obj);\r\n        var save = {};\r\n        save[this._key] = data;\r\n        this._state.setState(save);\r\n    };\r\n    Repository.prototype.remove = function (obj) {\r\n        var data = this.getAll();\r\n        data.splice(data.indexOf(obj), 1);\r\n        var save = {};\r\n        save[this._key] = data;\r\n        this._state.setState(save);\r\n    };\r\n    Repository.prototype.getAllBy = function (critera, value) {\r\n        return this.getAll().filter(function (current) {\r\n            return current[critera] === value;\r\n        });\r\n    };\r\n    Repository.prototype.getOneBy = function (critera, value) {\r\n        return this.getAll().find(function (current) {\r\n            return current[critera] === value;\r\n        }) || null;\r\n    };\r\n    Repository.prototype.getAll = function () {\r\n        return this._state.getState()[this._key];\r\n    };\r\n    return Repository;\r\n}(coffe_maker_1.Proxy));\r\nexports[\"default\"] = Repository;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/model/repository/Repository.js?");

/***/ }),

/***/ "./dist/core/model/repository/ResourceRepository.js":
/*!**********************************************************!*\
  !*** ./dist/core/model/repository/ResourceRepository.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Repository_1 = __webpack_require__(/*! ./Repository */ \"./dist/core/model/repository/Repository.js\");\r\nvar ResourceRepository = /** @class */ (function (_super) {\r\n    __extends(ResourceRepository, _super);\r\n    function ResourceRepository() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    return ResourceRepository;\r\n}(Repository_1.default));\r\nexports[\"default\"] = ResourceRepository;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/model/repository/ResourceRepository.js?");

/***/ }),

/***/ "./dist/core/model/repository/TemplateBuildingRepository.js":
/*!******************************************************************!*\
  !*** ./dist/core/model/repository/TemplateBuildingRepository.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Repository_1 = __webpack_require__(/*! ./Repository */ \"./dist/core/model/repository/Repository.js\");\r\nvar TemplateBuildingRepository = /** @class */ (function (_super) {\r\n    __extends(TemplateBuildingRepository, _super);\r\n    function TemplateBuildingRepository() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    return TemplateBuildingRepository;\r\n}(Repository_1.default));\r\nexports[\"default\"] = TemplateBuildingRepository;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/model/repository/TemplateBuildingRepository.js?");

/***/ }),

/***/ "./dist/core/model/schema/building/Building.js":
/*!*****************************************************!*\
  !*** ./dist/core/model/schema/building/Building.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Building = /** @class */ (function () {\r\n    function Building(name, level, tplBuildingID, id) {\r\n        if (name === void 0) { name = \"\"; }\r\n        if (level === void 0) { level = null; }\r\n        if (tplBuildingID === void 0) { tplBuildingID = -1; }\r\n        if (id === void 0) { id = -1; }\r\n        this.name = name;\r\n        this.level = level;\r\n        this.tplBuildingID = tplBuildingID;\r\n        this.id = id;\r\n    }\r\n    Building.prototype.clone = function () {\r\n        return new Building(this.name, this.level.clone(), this.tplBuildingID, this.id);\r\n    };\r\n    return Building;\r\n}());\r\nexports[\"default\"] = Building;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/model/schema/building/Building.js?");

/***/ }),

/***/ "./dist/core/model/schema/building/BuildingLevel.js":
/*!**********************************************************!*\
  !*** ./dist/core/model/schema/building/BuildingLevel.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar QuantityList_1 = __webpack_require__(/*! ../resources/QuantityList */ \"./dist/core/model/schema/resources/QuantityList.js\");\r\nvar BuildingLevel = /** @class */ (function () {\r\n    function BuildingLevel(level, cost, prod, cons, sold) {\r\n        if (level === void 0) { level = 0; }\r\n        if (cost === void 0) { cost = new QuantityList_1.default([]); }\r\n        if (prod === void 0) { prod = new QuantityList_1.default([]); }\r\n        if (cons === void 0) { cons = new QuantityList_1.default([]); }\r\n        if (sold === void 0) { sold = new QuantityList_1.default([]); }\r\n        this.level = level;\r\n        this.cost = cost;\r\n        this.prod = prod;\r\n        this.cons = cons;\r\n        this.sold = sold;\r\n    }\r\n    BuildingLevel.prototype.clone = function () {\r\n        return new BuildingLevel(this.level, this.cost.clone(), this.prod.clone(), this.cons.clone(), this.sold.clone());\r\n    };\r\n    return BuildingLevel;\r\n}());\r\nexports[\"default\"] = BuildingLevel;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/model/schema/building/BuildingLevel.js?");

/***/ }),

/***/ "./dist/core/model/schema/building/TemplateBuilding.js":
/*!*************************************************************!*\
  !*** ./dist/core/model/schema/building/TemplateBuilding.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar TemplateBuilding = /** @class */ (function () {\r\n    function TemplateBuilding(id, name, levels) {\r\n        if (id === void 0) { id = -1; }\r\n        if (name === void 0) { name = \"\"; }\r\n        if (levels === void 0) { levels = []; }\r\n        this.id = id;\r\n        this.name = name;\r\n        this.levels = levels;\r\n    }\r\n    TemplateBuilding.prototype.clone = function () {\r\n        return new TemplateBuilding(this.id, this.name, this.levels.map(function (l) { return l.clone(); }));\r\n    };\r\n    return TemplateBuilding;\r\n}());\r\nexports[\"default\"] = TemplateBuilding;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/model/schema/building/TemplateBuilding.js?");

/***/ }),

/***/ "./dist/core/model/schema/city/City.js":
/*!*********************************************!*\
  !*** ./dist/core/model/schema/city/City.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar QuantityList_1 = __webpack_require__(/*! ../resources/QuantityList */ \"./dist/core/model/schema/resources/QuantityList.js\");\r\nvar City = /** @class */ (function () {\r\n    function City(id, name, buildings, wallet) {\r\n        if (id === void 0) { id = 0; }\r\n        if (name === void 0) { name = \"\"; }\r\n        if (buildings === void 0) { buildings = []; }\r\n        if (wallet === void 0) { wallet = new QuantityList_1.default([]); }\r\n        this.id = id;\r\n        this.name = name;\r\n        this.buildings = buildings;\r\n        this.wallet = wallet;\r\n    }\r\n    return City;\r\n}());\r\nexports[\"default\"] = City;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/model/schema/city/City.js?");

/***/ }),

/***/ "./dist/core/model/schema/resources/Quantity.js":
/*!******************************************************!*\
  !*** ./dist/core/model/schema/resources/Quantity.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Quantity = /** @class */ (function () {\r\n    function Quantity(resourceID, amount) {\r\n        if (resourceID === void 0) { resourceID = -1; }\r\n        if (amount === void 0) { amount = 0; }\r\n        this.resourceID = resourceID;\r\n        this.amount = amount;\r\n    }\r\n    Quantity.prototype.clone = function () {\r\n        return new Quantity(this.resourceID, this.amount);\r\n    };\r\n    return Quantity;\r\n}());\r\nexports[\"default\"] = Quantity;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/model/schema/resources/Quantity.js?");

/***/ }),

/***/ "./dist/core/model/schema/resources/QuantityList.js":
/*!**********************************************************!*\
  !*** ./dist/core/model/schema/resources/QuantityList.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar QuantityList = /** @class */ (function () {\r\n    function QuantityList(quantities) {\r\n        this._quantities = [];\r\n        this.set(quantities);\r\n    }\r\n    QuantityList.prototype.set = function (quantities) {\r\n        this._quantities = quantities;\r\n    };\r\n    QuantityList.prototype.get = function () {\r\n        return this._quantities;\r\n    };\r\n    QuantityList.prototype.clone = function () {\r\n        return new QuantityList(this._quantities.map(function (q) { return q.clone(); }));\r\n    };\r\n    return QuantityList;\r\n}());\r\nexports[\"default\"] = QuantityList;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/model/schema/resources/QuantityList.js?");

/***/ }),

/***/ "./dist/core/model/schema/resources/Resource.js":
/*!******************************************************!*\
  !*** ./dist/core/model/schema/resources/Resource.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Resource = /** @class */ (function () {\r\n    function Resource(id, name) {\r\n        if (id === void 0) { id = -1; }\r\n        if (name === void 0) { name = \"\"; }\r\n        this.id = id;\r\n        this.name = name;\r\n    }\r\n    return Resource;\r\n}());\r\nexports[\"default\"] = Resource;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/model/schema/resources/Resource.js?");

/***/ }),

/***/ "./dist/core/service/PaymentService.js":
/*!*********************************************!*\
  !*** ./dist/core/service/PaymentService.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar PaymentService = /** @class */ (function () {\r\n    function PaymentService() {\r\n    }\r\n    PaymentService.prototype.pay = function (payment, cost) {\r\n        // checks if there is not enough ressources\r\n        var pairs = [];\r\n        var _loop_1 = function (i) {\r\n            var current = cost.get()[i];\r\n            var corresponding = payment.get().find(function (q) { return q.resourceID === current.resourceID; }) || null;\r\n            if (corresponding === null || corresponding.amount < current.amount)\r\n                return { value: false };\r\n            pairs.push({ cost: current, payment: corresponding });\r\n        };\r\n        for (var i = 0; i < cost.get().length; i++) {\r\n            var state_1 = _loop_1(i);\r\n            if (typeof state_1 === \"object\")\r\n                return state_1.value;\r\n        }\r\n        pairs.forEach(function (current) {\r\n            current.payment.amount -= current.cost.amount;\r\n        });\r\n        return true;\r\n    };\r\n    return PaymentService;\r\n}());\r\nexports[\"default\"] = PaymentService;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/service/PaymentService.js?");

/***/ }),

/***/ "./dist/core/service/SerializerService.js":
/*!************************************************!*\
  !*** ./dist/core/service/SerializerService.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar SerializerService = /** @class */ (function () {\r\n    function SerializerService() {\r\n    }\r\n    SerializerService.prototype.serialize = function (cities, templates, resources, format) {\r\n        if (format === void 0) { format = \"raw\"; }\r\n        if (format === \"json\")\r\n            return JSON.stringify(this.convertToObj(cities, templates, resources));\r\n        else\r\n            return this.convertToObj(cities, templates, resources);\r\n    };\r\n    SerializerService.prototype.convertToObj = function (cities, templates, resources) {\r\n        var _this = this;\r\n        return {\r\n            cities: cities.map(function (c) { return _this.cityToObject(c); }),\r\n            templateBuildings: templates.map(function (t) { return _this.templateBuildingToObject(t); }),\r\n            resources: resources.map(function (r) { return _this.resourceToObject(r); })\r\n        };\r\n    };\r\n    SerializerService.prototype.resourceToObject = function (resource) {\r\n        return { id: resource.id, name: resource.name };\r\n    };\r\n    SerializerService.prototype.quantityToObject = function (quantity) {\r\n        return { resourceID: quantity.resourceID, amount: quantity.amount };\r\n    };\r\n    SerializerService.prototype.quantityListToObject = function (quantityList) {\r\n        return quantityList.get().map(this.quantityToObject);\r\n    };\r\n    SerializerService.prototype.buildingLevelToObject = function (buildingLevel) {\r\n        return {\r\n            level: buildingLevel.level,\r\n            cost: this.quantityListToObject(buildingLevel.cost),\r\n            prod: this.quantityListToObject(buildingLevel.prod),\r\n            cons: this.quantityListToObject(buildingLevel.cons),\r\n            sold: this.quantityListToObject(buildingLevel.sold),\r\n        };\r\n    };\r\n    SerializerService.prototype.templateBuildingToObject = function (tplBuilding) {\r\n        var _this = this;\r\n        return {\r\n            id: tplBuilding.id,\r\n            name: tplBuilding.name,\r\n            levels: tplBuilding.levels.map(function (l) { return _this.buildingLevelToObject(l); })\r\n        };\r\n    };\r\n    SerializerService.prototype.buildingToObject = function (building) {\r\n        return {\r\n            tplID: building.tplBuildingID,\r\n            level: building.level.level,\r\n        };\r\n    };\r\n    SerializerService.prototype.cityToObject = function (city) {\r\n        var _this = this;\r\n        return {\r\n            id: city.id,\r\n            name: city.name,\r\n            wallet: this.quantityListToObject(city.wallet),\r\n            buildings: city.buildings.map(function (b) { return _this.buildingToObject(b); })\r\n        };\r\n    };\r\n    return SerializerService;\r\n}());\r\nexports[\"default\"] = SerializerService;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/service/SerializerService.js?");

/***/ }),

/***/ "./dist/core/service/UIDService.js":
/*!*****************************************!*\
  !*** ./dist/core/service/UIDService.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\r\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\r\n        if (ar || !(i in from)) {\r\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\r\n            ar[i] = from[i];\r\n        }\r\n    }\r\n    return to.concat(ar || Array.prototype.slice.call(from));\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar UIDService = /** @class */ (function () {\r\n    function UIDService() {\r\n        this.ids = new Map();\r\n    }\r\n    UIDService.prototype.reset = function () {\r\n        this.ids = new Map();\r\n    };\r\n    UIDService.prototype.createUID = function (category, defaultUID) {\r\n        if (category === void 0) { category = \"no_category\"; }\r\n        if (defaultUID === void 0) { defaultUID = -1; }\r\n        if (!this.ids.has(category)) {\r\n            this.ids.set(category, []);\r\n        }\r\n        var ids = this.ids.get(category);\r\n        var maxID = Math.max.apply(Math, __spreadArray(__spreadArray([], ids, false), [0], false));\r\n        var id = defaultUID > maxID + 1 ? defaultUID : maxID + 1;\r\n        ids.push(id);\r\n        return id;\r\n    };\r\n    return UIDService;\r\n}());\r\nexports[\"default\"] = UIDService;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/service/UIDService.js?");

/***/ }),

/***/ "./dist/core/service/factory/BuildingFactory.js":
/*!******************************************************!*\
  !*** ./dist/core/service/factory/BuildingFactory.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Building_1 = __webpack_require__(/*! ../../model/schema/building/Building */ \"./dist/core/model/schema/building/Building.js\");\r\nvar BuildingFactory = /** @class */ (function () {\r\n    function BuildingFactory(_repo, _uidService) {\r\n        this._repo = _repo;\r\n        this._uidService = _uidService;\r\n        this.fromData = this.fromData.bind(this);\r\n    }\r\n    BuildingFactory.prototype.fromData = function (obj) {\r\n        var template = this._repo.getOneBy('id', obj.tplID) || null;\r\n        if (template === null)\r\n            return null;\r\n        var id = this._uidService.createUID(\"buildings\", obj.id);\r\n        if (template.levels.length === 0)\r\n            return new Building_1.default(template.name, null, template.id, id);\r\n        var level = template.levels.find(function (l) { return l.level === obj.level; }) || template.levels[0];\r\n        return new Building_1.default(template.name, level.clone(), template.id, id);\r\n    };\r\n    return BuildingFactory;\r\n}());\r\nexports[\"default\"] = BuildingFactory;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/service/factory/BuildingFactory.js?");

/***/ }),

/***/ "./dist/core/service/factory/BuildingLevelFactory.js":
/*!***********************************************************!*\
  !*** ./dist/core/service/factory/BuildingLevelFactory.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar BuildingLevel_1 = __webpack_require__(/*! ../../model/schema/building/BuildingLevel */ \"./dist/core/model/schema/building/BuildingLevel.js\");\r\nvar BuildingLevelFactory = /** @class */ (function () {\r\n    function BuildingLevelFactory(_quantityListFactory) {\r\n        this._quantityListFactory = _quantityListFactory;\r\n        this.fromData = this.fromData.bind(this);\r\n    }\r\n    BuildingLevelFactory.prototype.fromData = function (obj) {\r\n        return new BuildingLevel_1.default(obj.level, this._quantityListFactory.fromData(obj.cost || []), this._quantityListFactory.fromData(obj.prod || []), this._quantityListFactory.fromData(obj.cons || []), this._quantityListFactory.fromData(obj.sold || []));\r\n    };\r\n    return BuildingLevelFactory;\r\n}());\r\nexports[\"default\"] = BuildingLevelFactory;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/service/factory/BuildingLevelFactory.js?");

/***/ }),

/***/ "./dist/core/service/factory/CityFactory.js":
/*!**************************************************!*\
  !*** ./dist/core/service/factory/CityFactory.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar City_1 = __webpack_require__(/*! ../../model/schema/city/City */ \"./dist/core/model/schema/city/City.js\");\r\nvar CityFactory = /** @class */ (function () {\r\n    function CityFactory(_buildingFactory, _quantityListFactory, _uidService) {\r\n        this._buildingFactory = _buildingFactory;\r\n        this._quantityListFactory = _quantityListFactory;\r\n        this._uidService = _uidService;\r\n        this.fromData = this.fromData.bind(this);\r\n    }\r\n    CityFactory.prototype.fromData = function (obj) {\r\n        var _this = this;\r\n        var buildings = [];\r\n        var wallet = this._quantityListFactory.fromData(obj.wallet);\r\n        if (Array.isArray(obj.buildings)) {\r\n            buildings = obj.buildings.map(function (b, id) {\r\n                var data = __assign({}, b);\r\n                var uid = _this._uidService.createUID(\"cities\", b.id);\r\n                data.id = uid;\r\n                return _this._buildingFactory.fromData(data);\r\n            });\r\n        }\r\n        return new City_1.default(obj.id, obj.name, buildings, wallet);\r\n    };\r\n    return CityFactory;\r\n}());\r\nexports[\"default\"] = CityFactory;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/service/factory/CityFactory.js?");

/***/ }),

/***/ "./dist/core/service/factory/QuantityFactory.js":
/*!******************************************************!*\
  !*** ./dist/core/service/factory/QuantityFactory.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Quantity_1 = __webpack_require__(/*! ../../model/schema/resources/Quantity */ \"./dist/core/model/schema/resources/Quantity.js\");\r\nvar QuantityFactory = /** @class */ (function () {\r\n    function QuantityFactory(_resourceRepository) {\r\n        this._resourceRepository = _resourceRepository;\r\n        this.fromData = this.fromData.bind(this);\r\n    }\r\n    QuantityFactory.prototype.fromData = function (obj) {\r\n        var resource = this._resourceRepository.getOneBy('id', obj.resourceID);\r\n        if (resource === null)\r\n            return null;\r\n        return new Quantity_1.default(obj.resourceID, obj.amount);\r\n    };\r\n    return QuantityFactory;\r\n}());\r\nexports[\"default\"] = QuantityFactory;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/service/factory/QuantityFactory.js?");

/***/ }),

/***/ "./dist/core/service/factory/QuantityListFactory.js":
/*!**********************************************************!*\
  !*** ./dist/core/service/factory/QuantityListFactory.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar QuantityList_1 = __webpack_require__(/*! ../../model/schema/resources/QuantityList */ \"./dist/core/model/schema/resources/QuantityList.js\");\r\nvar QuantityListFactory = /** @class */ (function () {\r\n    function QuantityListFactory(_quantityFactory) {\r\n        this._quantityFactory = _quantityFactory;\r\n        this.fromData = this.fromData.bind(this);\r\n    }\r\n    QuantityListFactory.prototype.fromData = function (obj) {\r\n        return new QuantityList_1.default(obj.map(this._quantityFactory.fromData));\r\n    };\r\n    return QuantityListFactory;\r\n}());\r\nexports[\"default\"] = QuantityListFactory;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/service/factory/QuantityListFactory.js?");

/***/ }),

/***/ "./dist/core/service/factory/ResourceFactory.js":
/*!******************************************************!*\
  !*** ./dist/core/service/factory/ResourceFactory.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Resource_1 = __webpack_require__(/*! ../../model/schema/resources/Resource */ \"./dist/core/model/schema/resources/Resource.js\");\r\nvar ResourceFactory = /** @class */ (function () {\r\n    function ResourceFactory(_uidService) {\r\n        this._uidService = _uidService;\r\n        this.fromData = this.fromData.bind(this);\r\n    }\r\n    ResourceFactory.prototype.fromData = function (obj) {\r\n        return new Resource_1.default(this._uidService.createUID(\"resources\", obj.id), obj.name);\r\n    };\r\n    return ResourceFactory;\r\n}());\r\nexports[\"default\"] = ResourceFactory;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/service/factory/ResourceFactory.js?");

/***/ }),

/***/ "./dist/core/service/factory/TemplateBuildingFactory.js":
/*!**************************************************************!*\
  !*** ./dist/core/service/factory/TemplateBuildingFactory.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar TemplateBuilding_1 = __webpack_require__(/*! ../../model/schema/building/TemplateBuilding */ \"./dist/core/model/schema/building/TemplateBuilding.js\");\r\nvar TemplateBuildingFactory = /** @class */ (function () {\r\n    function TemplateBuildingFactory(_levelFactory, _uidService) {\r\n        this._levelFactory = _levelFactory;\r\n        this._uidService = _uidService;\r\n        this.fromData = this.fromData.bind(this);\r\n    }\r\n    TemplateBuildingFactory.prototype.fromData = function (obj) {\r\n        var uid = this._uidService.createUID(\"templates\", obj.id);\r\n        return new TemplateBuilding_1.default(uid, obj.name, obj.levels.map(this._levelFactory.fromData));\r\n    };\r\n    return TemplateBuildingFactory;\r\n}());\r\nexports[\"default\"] = TemplateBuildingFactory;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/core/service/factory/TemplateBuildingFactory.js?");

/***/ }),

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\nvar coffe_maker_1 = __webpack_require__(/*! @thetinyspark/coffe-maker */ \"./node_modules/@thetinyspark/coffe-maker/dist/index.js\");\r\nvar config_1 = __webpack_require__(/*! ./core/ioc/config */ \"./dist/core/ioc/config.js\");\r\nvar Engine_1 = __webpack_require__(/*! ./core/Engine */ \"./dist/core/Engine.js\");\r\nvar app_const_1 = __webpack_require__(/*! ./core/ioc/app.const */ \"./dist/core/ioc/app.const.js\");\r\nvar defaultContainer = (0, config_1.configIOC)(new coffe_maker_1.Container());\r\nvar engine = new Engine_1.default();\r\nmodule.exports = {\r\n    engine: engine,\r\n    defaultContainer: defaultContainer,\r\n    appConstants: app_const_1.default\r\n};\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/index.js?");

/***/ }),

/***/ "./dist/version.js":
/*!*************************!*\
  !*** ./dist/version.js ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.version = void 0;\r\nexports.version = \"1.4.1\";\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./dist/version.js?");

/***/ }),

/***/ "./node_modules/@thetinyspark/coffe-maker/dist/core/Facade.js":
/*!********************************************************************!*\
  !*** ./node_modules/@thetinyspark/coffe-maker/dist/core/Facade.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar tiny_observer_1 = __webpack_require__(/*! @thetinyspark/tiny-observer */ \"./node_modules/@thetinyspark/tiny-observer/dist/index.js\");\r\nvar Facade = /** @class */ (function (_super) {\r\n    __extends(Facade, _super);\r\n    function Facade() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this._proxies = new Map();\r\n        _this._mediators = new Map();\r\n        _this._services = new Map();\r\n        _this.sendNotification = function (key, payload) {\r\n            if (payload === void 0) { payload = {}; }\r\n            _this.emit(key, payload);\r\n        };\r\n        _this.query = function (key, payload) {\r\n            if (payload === void 0) { payload = {}; }\r\n            payload.quid = Math.round(Math.random() * 10000);\r\n            var promise = new Promise(function (resolve, reject) {\r\n                var onQueryComplete = function (notification) {\r\n                    _this.unsubscribe(\"QueryCompleted_\" + payload.quid, onQueryComplete);\r\n                    resolve(notification.getPayload());\r\n                };\r\n                _this.subscribe(\"QueryCompleted_\" + payload.quid, onQueryComplete);\r\n            });\r\n            _this.sendNotification(key, payload);\r\n            return promise;\r\n        };\r\n        return _this;\r\n    }\r\n    Facade.prototype.registerCommand = function (key, factoryMethod) {\r\n        var _this = this;\r\n        this.subscribe(key, function (notification) {\r\n            var quid = notification.getPayload().quid || -1;\r\n            var result = factoryMethod.call(null).execute(notification);\r\n            _this.emit(\"QueryCompleted_\" + quid, result);\r\n        });\r\n    };\r\n    Facade.prototype.registerProxy = function (key, proxy) {\r\n        proxy.setFacade(this);\r\n        this._proxies.set(key, proxy);\r\n    };\r\n    Facade.prototype.registerMediator = function (key, mediator) {\r\n        mediator.setFacade(this);\r\n        this._mediators.set(key, mediator);\r\n    };\r\n    Facade.prototype.registerService = function (key, service) {\r\n        this._services.set(key, service);\r\n    };\r\n    Facade.prototype.getService = function (key) {\r\n        return this._services.get(key) || null;\r\n    };\r\n    Facade.prototype.getProxy = function (key) {\r\n        return this._proxies.get(key) || null;\r\n    };\r\n    Facade.prototype.getMediator = function (key) {\r\n        return this._mediators.get(key) || null;\r\n    };\r\n    return Facade;\r\n}(tiny_observer_1.Emitter));\r\nexports[\"default\"] = Facade;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./node_modules/@thetinyspark/coffe-maker/dist/core/Facade.js?");

/***/ }),

/***/ "./node_modules/@thetinyspark/coffe-maker/dist/core/ioc/Container.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@thetinyspark/coffe-maker/dist/core/ioc/Container.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.rootContainer = void 0;\r\nvar Container = /** @class */ (function () {\r\n    function Container() {\r\n        this.reset();\r\n    }\r\n    Container.prototype.resolve = function (key) {\r\n        if (!this._map.has(key))\r\n            return null;\r\n        if (this._singleton.has(key)) {\r\n            if (this._singleton.get(key) === null) {\r\n                this._singleton.set(key, this._map.get(key).call(null));\r\n            }\r\n            return this._singleton.get(key);\r\n        }\r\n        return this._map.get(key).call(null);\r\n    };\r\n    Container.prototype.reset = function () {\r\n        this._map = new Map();\r\n        this._singleton = new Map();\r\n    };\r\n    Container.prototype.register = function (key, factoryMethod, singleton) {\r\n        if (singleton === void 0) { singleton = false; }\r\n        this._map.delete(key);\r\n        this._singleton.delete(key);\r\n        this._map.set(key, factoryMethod);\r\n        if (singleton)\r\n            this._singleton.set(key, null);\r\n    };\r\n    Container.prototype.get = function (key) {\r\n        return this._map.get(key) || null;\r\n    };\r\n    return Container;\r\n}());\r\nexports[\"default\"] = Container;\r\nexports.rootContainer = new Container();\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./node_modules/@thetinyspark/coffe-maker/dist/core/ioc/Container.js?");

/***/ }),

/***/ "./node_modules/@thetinyspark/coffe-maker/dist/core/ioc/Injectable.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@thetinyspark/coffe-maker/dist/core/ioc/Injectable.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Container_1 = __webpack_require__(/*! ./Container */ \"./node_modules/@thetinyspark/coffe-maker/dist/core/ioc/Container.js\");\r\nfunction Injectable(props) {\r\n    var container = props.container || Container_1.rootContainer;\r\n    var singleton = props.singleton || false;\r\n    return function (target) {\r\n        container.register(props.token, function () { return new target(); }, singleton);\r\n    };\r\n}\r\nexports[\"default\"] = Injectable;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./node_modules/@thetinyspark/coffe-maker/dist/core/ioc/Injectable.js?");

/***/ }),

/***/ "./node_modules/@thetinyspark/coffe-maker/dist/core/ioc/resolve.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@thetinyspark/coffe-maker/dist/core/ioc/resolve.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Container_1 = __webpack_require__(/*! ./Container */ \"./node_modules/@thetinyspark/coffe-maker/dist/core/ioc/Container.js\");\r\nfunction resolve(token, container) {\r\n    if (container === void 0) { container = null; }\r\n    if (container !== null)\r\n        return container.resolve(token);\r\n    else\r\n        return Container_1.rootContainer.resolve(token);\r\n}\r\nexports[\"default\"] = resolve;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./node_modules/@thetinyspark/coffe-maker/dist/core/ioc/resolve.js?");

/***/ }),

/***/ "./node_modules/@thetinyspark/coffe-maker/dist/core/model/Model.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@thetinyspark/coffe-maker/dist/core/model/Model.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Model = /** @class */ (function () {\r\n    function Model() {\r\n        this._state = null;\r\n    }\r\n    Model.prototype.setState = function (value) {\r\n        this._state = value;\r\n    };\r\n    Model.prototype.getState = function () {\r\n        return this._state;\r\n    };\r\n    Model.prototype.resetState = function () {\r\n        this._state = null;\r\n    };\r\n    return Model;\r\n}());\r\nexports[\"default\"] = Model;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./node_modules/@thetinyspark/coffe-maker/dist/core/model/Model.js?");

/***/ }),

/***/ "./node_modules/@thetinyspark/coffe-maker/dist/core/model/Proxy.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@thetinyspark/coffe-maker/dist/core/model/Proxy.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Proxy = /** @class */ (function () {\r\n    function Proxy() {\r\n        this._facade = null;\r\n    }\r\n    Proxy.prototype.setFacade = function (facade) {\r\n        this._facade = facade;\r\n    };\r\n    Proxy.prototype.getFacade = function () {\r\n        return this._facade;\r\n    };\r\n    return Proxy;\r\n}());\r\nexports[\"default\"] = Proxy;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./node_modules/@thetinyspark/coffe-maker/dist/core/model/Proxy.js?");

/***/ }),

/***/ "./node_modules/@thetinyspark/coffe-maker/dist/core/model/StoreModel.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@thetinyspark/coffe-maker/dist/core/model/StoreModel.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Model_1 = __webpack_require__(/*! ./Model */ \"./node_modules/@thetinyspark/coffe-maker/dist/core/model/Model.js\");\r\nvar StoreModel = /** @class */ (function (_super) {\r\n    __extends(StoreModel, _super);\r\n    function StoreModel() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this._old = null;\r\n        return _this;\r\n    }\r\n    StoreModel.prototype.setState = function (value) {\r\n        var newState = __assign(__assign({}, this._state), value);\r\n        this._old = this._state;\r\n        this._state = newState;\r\n        this.deepFreeze(this._state);\r\n    };\r\n    StoreModel.prototype.getState = function () {\r\n        return this._state;\r\n    };\r\n    StoreModel.prototype.getPrevState = function () {\r\n        return this._old;\r\n    };\r\n    StoreModel.prototype.resetState = function () {\r\n        this._state = null;\r\n        this._old = null;\r\n    };\r\n    StoreModel.prototype.updated = function () {\r\n        var notSame = this._state !== this._old;\r\n        this._state = this._old;\r\n        return notSame;\r\n    };\r\n    StoreModel.prototype.deepFreeze = function (obj) {\r\n        return Object.freeze(obj);\r\n    };\r\n    return StoreModel;\r\n}(Model_1.default));\r\nexports[\"default\"] = StoreModel;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./node_modules/@thetinyspark/coffe-maker/dist/core/model/StoreModel.js?");

/***/ }),

/***/ "./node_modules/@thetinyspark/coffe-maker/dist/core/module/CoffeeModule.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@thetinyspark/coffe-maker/dist/core/module/CoffeeModule.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar CoffeeModule = /** @class */ (function () {\r\n    function CoffeeModule() {\r\n        this._config = null;\r\n    }\r\n    CoffeeModule.prototype.load = function (facade) {\r\n        if (this._config === null)\r\n            return;\r\n        this._config.proxies.forEach(function (value) {\r\n            facade.registerProxy(value.key, value.instance);\r\n        });\r\n        this._config.mediators.forEach(function (value) {\r\n            facade.registerMediator(value.key, value.instance);\r\n        });\r\n        this._config.services.forEach(function (value) {\r\n            facade.registerService(value.key, value.instance);\r\n        });\r\n        this._config.commands.forEach(function (value) {\r\n            facade.registerCommand(value.key, value.factory);\r\n        });\r\n    };\r\n    CoffeeModule.prototype.getConfiguration = function () {\r\n        return this._config;\r\n    };\r\n    CoffeeModule.prototype.configure = function (config) {\r\n        this._config = config;\r\n    };\r\n    return CoffeeModule;\r\n}());\r\nexports[\"default\"] = CoffeeModule;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./node_modules/@thetinyspark/coffe-maker/dist/core/module/CoffeeModule.js?");

/***/ }),

/***/ "./node_modules/@thetinyspark/coffe-maker/dist/core/view/Mediator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@thetinyspark/coffe-maker/dist/core/view/Mediator.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Mediator = /** @class */ (function () {\r\n    function Mediator() {\r\n        this._facade = null;\r\n    }\r\n    Mediator.prototype.setFacade = function (facade) {\r\n        this._facade = facade;\r\n    };\r\n    Mediator.prototype.getFacade = function () {\r\n        return this._facade;\r\n    };\r\n    return Mediator;\r\n}());\r\nexports[\"default\"] = Mediator;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./node_modules/@thetinyspark/coffe-maker/dist/core/view/Mediator.js?");

/***/ }),

/***/ "./node_modules/@thetinyspark/coffe-maker/dist/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@thetinyspark/coffe-maker/dist/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.resolve = exports.Injectable = exports.CoffeeModule = exports.Facade = exports.Mediator = exports.StoreModel = exports.Proxy = exports.Model = exports.Container = void 0;\r\nvar Container_1 = __webpack_require__(/*! ./core/ioc/Container */ \"./node_modules/@thetinyspark/coffe-maker/dist/core/ioc/Container.js\");\r\nexports.Container = Container_1.default;\r\nvar Injectable_1 = __webpack_require__(/*! ./core/ioc/Injectable */ \"./node_modules/@thetinyspark/coffe-maker/dist/core/ioc/Injectable.js\");\r\nexports.Injectable = Injectable_1.default;\r\nvar resolve_1 = __webpack_require__(/*! ./core/ioc/resolve */ \"./node_modules/@thetinyspark/coffe-maker/dist/core/ioc/resolve.js\");\r\nexports.resolve = resolve_1.default;\r\nvar Model_1 = __webpack_require__(/*! ./core/model/Model */ \"./node_modules/@thetinyspark/coffe-maker/dist/core/model/Model.js\");\r\nexports.Model = Model_1.default;\r\nvar Proxy_1 = __webpack_require__(/*! ./core/model/Proxy */ \"./node_modules/@thetinyspark/coffe-maker/dist/core/model/Proxy.js\");\r\nexports.Proxy = Proxy_1.default;\r\nvar StoreModel_1 = __webpack_require__(/*! ./core/model/StoreModel */ \"./node_modules/@thetinyspark/coffe-maker/dist/core/model/StoreModel.js\");\r\nexports.StoreModel = StoreModel_1.default;\r\nvar Mediator_1 = __webpack_require__(/*! ./core/view/Mediator */ \"./node_modules/@thetinyspark/coffe-maker/dist/core/view/Mediator.js\");\r\nexports.Mediator = Mediator_1.default;\r\nvar Facade_1 = __webpack_require__(/*! ./core/Facade */ \"./node_modules/@thetinyspark/coffe-maker/dist/core/Facade.js\");\r\nexports.Facade = Facade_1.default;\r\nvar CoffeeModule_1 = __webpack_require__(/*! ./core/module/CoffeeModule */ \"./node_modules/@thetinyspark/coffe-maker/dist/core/module/CoffeeModule.js\");\r\nexports.CoffeeModule = CoffeeModule_1.default;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./node_modules/@thetinyspark/coffe-maker/dist/index.js?");

/***/ }),

/***/ "./node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.js":
/*!************************************************************************!*\
  !*** ./node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Notification_1 = __webpack_require__(/*! ./Notification */ \"./node_modules/@thetinyspark/tiny-observer/dist/event/Notification.js\");\r\nvar Emitter = /** @class */ (function () {\r\n    function Emitter() {\r\n        this._observers = new Map();\r\n    }\r\n    Emitter.prototype.emit = function (eventType, payload) {\r\n        var _this = this;\r\n        var observers = this._observers.get(eventType) || [];\r\n        var notif = new Notification_1.default(eventType, this, payload);\r\n        observers.forEach(function (observer) {\r\n            if (observer.limit > 0 || observer.infinite) {\r\n                observer.func(notif);\r\n                observer.limit--;\r\n            }\r\n            else {\r\n                _this.unsubscribe(eventType, observer.func);\r\n            }\r\n        });\r\n    };\r\n    Emitter.prototype.hasObservers = function (eventType) {\r\n        return this._observers.get(eventType) !== undefined;\r\n    };\r\n    Emitter.prototype.unsubscribe = function (eventType, observer) {\r\n        if (this.isObserver(eventType, observer)) {\r\n            var observers = this._observers.get(eventType) || [];\r\n            var index = observers.map(function (o) { return o.func; }).indexOf(observer);\r\n            observers.splice(index, 1);\r\n            if (observers.length === 0)\r\n                this._observers.set(eventType, undefined);\r\n        }\r\n    };\r\n    Emitter.prototype.isObserver = function (eventType, observer) {\r\n        var observers = this._observers.get(eventType) || [];\r\n        return observers.map(function (o) { return o.func; }).indexOf(observer) > -1;\r\n    };\r\n    Emitter.prototype.subscribe = function (eventType, observer, limit) {\r\n        if (limit === void 0) { limit = -1; }\r\n        if (this.isObserver(eventType, observer))\r\n            return false;\r\n        var observers = this._observers.get(eventType) || [];\r\n        observers.push({ func: observer, limit: limit, infinite: limit < 0 });\r\n        this._observers.set(eventType, observers);\r\n        return true;\r\n    };\r\n    Emitter.prototype.unsubscribeAll = function () {\r\n        this._observers = new Map();\r\n    };\r\n    return Emitter;\r\n}());\r\nexports[\"default\"] = Emitter;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.js?");

/***/ }),

/***/ "./node_modules/@thetinyspark/tiny-observer/dist/event/Notification.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@thetinyspark/tiny-observer/dist/event/Notification.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Notification = /** @class */ (function () {\r\n    function Notification(type, emitter, payload) {\r\n        this._type = type;\r\n        this._emitter = emitter;\r\n        this._payload = payload;\r\n    }\r\n    Notification.prototype.getEventType = function () {\r\n        return this._type;\r\n    };\r\n    Notification.prototype.getEmitter = function () {\r\n        return this._emitter;\r\n    };\r\n    Notification.prototype.getPayload = function () {\r\n        return this._payload;\r\n    };\r\n    return Notification;\r\n}());\r\nexports[\"default\"] = Notification;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./node_modules/@thetinyspark/tiny-observer/dist/event/Notification.js?");

/***/ }),

/***/ "./node_modules/@thetinyspark/tiny-observer/dist/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@thetinyspark/tiny-observer/dist/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Notification = exports.Emitter = void 0;\r\nvar Emitter_1 = __webpack_require__(/*! ./event/Emitter */ \"./node_modules/@thetinyspark/tiny-observer/dist/event/Emitter.js\");\r\nexports.Emitter = Emitter_1.default;\r\nvar Notification_1 = __webpack_require__(/*! ./event/Notification */ \"./node_modules/@thetinyspark/tiny-observer/dist/event/Notification.js\");\r\nexports.Notification = Notification_1.default;\r\n\n\n//# sourceURL=webpack://@thetinyspark/paradox/./node_modules/@thetinyspark/tiny-observer/dist/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./dist/index.js");
/******/ 	
/******/ })()
;