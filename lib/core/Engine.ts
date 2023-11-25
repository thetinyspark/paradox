import { Container, Facade} from "@thetinyspark/coffe-maker";
import { Emitter } from "@thetinyspark/tiny-observer";
import AppConst from "./ioc/app.const";
import { configFacade, configIOC } from "./ioc/config";
import { version } from "../version";
import City from "./model/schema/city/City";
import { GameSaveDescType } from "./model/types/GameSaveDescType";
import { CityDescType } from "./model/types/CityDescType";
import { ResourceDescType } from "./model/types/ResourceDescType";
import Resource from "./model/schema/resources/Resource";
import TemplateBuilding from "./model/schema/building/TemplateBuilding";
import { TemplateBuildingDescType } from "./model/types/TemplateBuildingDescType";
import { CityBuildingPointerType } from "./model/types/CityBuildingPointerType";
import { CreateCityBuildingType } from "./model/types/CreateCityBuildingType";
import { CityPointerType } from "./model/types/CityPointerType";
import IUIDService from "./service/IUIDService";
import IRepository from "./model/repository/IRepository";
import { SetBuildingFrozenStatusType } from "./model/types/SetBuildingFrozenStatusType";
/**
 * The Engine object represents the main gateway between you and the paradox engine's core.
 */
export default class Engine extends Emitter{
    private _facade:Facade; 
    private _container:Container;

    constructor(){
        super();
    }

    /**
     * Reset data but keeps configuration
     */
    reset(){
        const uidService    = this._container.resolve(AppConst.UID_SERVICE) as IUIDService;
        const cities        = this._container.resolve(AppConst.CITY_REPOSITORY) as IRepository<City>;
        const templates     = this._container.resolve(AppConst.TEMPLATE_BUILDING_REPOSITORY) as IRepository<TemplateBuilding>;
        const resources     = this._container.resolve(AppConst.RESOURCE_REPOSITORY) as IRepository<Resource>;

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
    init(container:Container, configuration:GameSaveDescType = {}){
        container.reset();
        configIOC(container);
        configFacade(container);
        this._facade = container.resolve(AppConst.APP_FACADE) as Facade;
        this._container = container;

        // reset
        this.reset();

        // init resources and buildings
        this._facade.sendNotification(AppConst.RESTORE_SAVED_DATA, configuration);
    }
    /**
     * Returns a version num
     * @returns string
     */
    getVersion(){
        return version;
    }
    /**
     * Returns the Facade which is used to dispatch commands and queries.
     * @returns Facade
     */
    getFacade(){
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
    doCycle(){
        this.getFacade().sendNotification(AppConst.DO_CYCLE);
    }

    /**
     * Adds a building to a city
     * 
     * example.ts
     * ```typescript
     * Paradox.engine.addBuilding({cityID: 1, tplID: 1, frozen:true})
     * ```
     */
    addBuilding(data:CreateCityBuildingType){
        return this.getFacade().query(AppConst.ADD_BUILDING_TO_CITY, data);
    }
    /**
     * Set frozen status for a city building
     * A frozen building does not produce nor consume anything on cycle
     * example.ts
     * ```typescript
     * Paradox.engine.setBuildingFrozenStatus({cityID: 1, id: 1, frozen:true})
     * ```
     */
    setBuildingFrozenStatus(data:SetBuildingFrozenStatusType){
        return this.getFacade().sendNotification(AppConst.SET_BUILDING_FROZEN_STATUS, data);
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
    buyBuilding(data:CreateCityBuildingType){
        return this.getFacade().query(AppConst.BUY_BUILDING, data);
    }
    /**
     * Upgrades a building with a specific id (it if exists)
     * 
     * example.ts
     * ```typescript
     * Paradox.engine.upgradeBuilding({cityID: 1, id:1});
     * ```
     */
    upgradeBuilding(data:CityBuildingPointerType){
        return this.getFacade().query(AppConst.UPGRADE_BUILDING, data);
    }
    /**
     * Removes a building with a specific id from a city (it if exists)
     * 
     * example.ts
     * ```typescript
     * Paradox.engine.removeBuilding({cityID: 1, id:1});
     * ```
     */
    removeBuilding(data:CityBuildingPointerType){
        return this.getFacade().query(AppConst.REMOVE_BUILDING_FROM_CITY, data);
    }
    /**
     * Sells a building with a specific id and remove it from a city (it if exists)
     * 
     * example.ts
     * ```typescript
     * Paradox.engine.sellBuilding({cityID:1, id:1});
     * ```
     */
    sellBuilding(data:CityBuildingPointerType){
        return this.getFacade().query(AppConst.SELL_BUILDING, data);
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
    createBuildingTemplates(templates:TemplateBuildingDescType[]){
        return this.getFacade().sendNotification(AppConst.CREATE_TEMPLATE_BUILDINGS, templates);
    }
    /**
     * Returns all building's templates
     * 
     * example.ts
     * ```typescript
     * Paradox.engine.getTemplateBuildings().then( (templates)=>{});
     * ```
     */
    getTemplateBuildings():Promise<TemplateBuilding[]>{
        return this.getFacade().query(AppConst.GET_TEMPLATES_BUILDINGS_QUERY);
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
    createResources(resources:ResourceDescType[]){
        return this.getFacade().sendNotification(AppConst.CREATE_RESOURCES, resources);
    }
    /**
     * Returns all resources
     * 
     * example.ts
     * ```typescript
     * Paradox.engine.getResources().then( (templates)=>{});
     * ```
     */
    getResources():Promise<Resource[]>{
        return this.getFacade().query(AppConst.GET_RESOURCES_QUERY);
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
    addCity(city:CityDescType){
        return this.getFacade().query(AppConst.ADD_CITY, city);
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
    removeCity(city:CityPointerType){
        return this.getFacade().sendNotification(AppConst.REMOVE_CITY, city);
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
    createCities(cities:CityDescType[]){
        return this.getFacade().sendNotification(AppConst.CREATE_CITIES, cities);
    }
    /**
     * Returns all cities
     * 
     * example.ts
     * ```typescript
     * Paradox.engine.getCities().then( (templates)=>{});
     * ```
     */
    getCities():Promise<City[]>{
        return this.getFacade().query(AppConst.GET_CITIES_QUERY);
    }
    /**
     * Returns a city by its id (if exists)
     * 
     * example.ts
     * ```typescript
     * Paradox.engine.getCityByID({id:1}).then( (city)=>{});
     * ```
     */
    getCityByID(data:CityPointerType):Promise<City>{
        return this.getFacade().query(AppConst.GET_CITY_QUERY, data);
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
    restoreGameData(data:GameSaveDescType){
        // reset
        this.reset();
        return this.getFacade().sendNotification(AppConst.RESTORE_SAVED_DATA, data);
    }
    /**
     * Saves and returns all game data
     * 
     * example.ts
     * ```typescript
     * Paradox.engine.saveGameData().then( (gameData)=>{});
     * ```
     */
    saveGameData():Promise<GameSaveDescType>{
        return this.getFacade().query(AppConst.SAVE_GAME_DATA_QUERY);
    }
}