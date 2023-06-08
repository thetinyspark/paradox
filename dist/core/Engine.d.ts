import { Container, Facade } from "@thetinyspark/coffe-maker";
import { Emitter } from "@thetinyspark/tiny-observer";
import City from "./model/schema/city/City";
/**
 * The Engine object represents the main gateway between you and the paradox engine's core.
 */
export default class Engine extends Emitter {
    private _facade;
    constructor();
    /**
     * Init the engine, and restores game data
     * @param container a Container's instance
     * @param configuration game data to restore
     */
    init(container: Container, configuration?: any): void;
    /**
     * Returns a version num
     * @returns string
     */
    getVersion(): string;
    /**
     * Returns the Facade which is used to dispatch commands and queries.
     * @returns Facade
     */
    getFacade(): Facade;
    /**
     * Processes a cycle. A cycle means that productions are added
     * to cities's wallets and consumptions are removed from them too.
     *
     * example.ts
     * ```typescript
     * Paradox.engine.doCycle()
     * ```
     */
    doCycle(): void;
    /**
     * Adds a building to a city
     *
     * example.ts
     * ```typescript
     * const data = ;
     * Paradox.engine.addBuilding({cityID: 1, tplID: 1})
     * ```
     */
    addBuilding(data: any): void;
    /**
     * Buys and adds a building to a city if city has enough resources
     *
     * example.ts
     * ```typescript
     * const data = ;
     * Paradox.engine.buyBuilding({cityID: 1, tplID: 1})
     * ```
     */
    buyBuilding(data: any): void;
    /**
     * Upgrades a building with a specific id (it if exists)
     *
     * example.ts
     * ```typescript
     * Paradox.engine.upgradeBuilding({cityID: 1, id:1});
     * ```
     */
    upgradeBuilding(data: any): void;
    /**
     * Removes a building with a specific id from a city (it if exists)
     *
     * example.ts
     * ```typescript
     * Paradox.engine.removeBuilding({cityID: 1, id:1});
     * ```
     */
    removeBuilding(data: any): void;
    /**
     * Sells a building with a specific id and remove it from a city (it if exists)
     *
     * example.ts
     * ```typescript
     * Paradox.engine.sellBuilding({cityID:1, id:1});
     * ```
     */
    sellBuilding(data: any): void;
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
    createBuildingTemplates(templates: any[]): void;
    /**
     * Returns all building's templates
     *
     * example.ts
     * ```typescript
     * Paradox.engine.getTemplateBuildings().then( (templates)=>{});
     * ```
     */
    getTemplateBuildings(): Promise<any>;
    /**
     * Create resources
     *
     * example.ts
     * ```typescript
     * const resources = [{id:1, name: "gold"},{id:2, name: "wood"},{id:3, name: "food"}];
     * Paradox.engine.createResources(resources)
     * ```
     */
    createResources(resources: any[]): void;
    /**
     * Returns all resources
     *
     * example.ts
     * ```typescript
     * Paradox.engine.getResources().then( (templates)=>{});
     * ```
     */
    getResources(): Promise<any>;
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
    addCity(city: any): void;
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
    createCities(cities: any[]): void;
    /**
     * Returns all cities
     *
     * example.ts
     * ```typescript
     * Paradox.engine.getCities().then( (templates)=>{});
     * ```
     */
    getCities(): Promise<any>;
    /**
     * Returns a city by its id (if exists)
     *
     * example.ts
     * ```typescript
     * Paradox.engine.getCityByID({id:1}).then( (city)=>{});
     * ```
     */
    getCityByID(data: any): Promise<City>;
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
    restoreGameData(data: any): void;
    /**
     * Saves and returns all game data
     *
     * example.ts
     * ```typescript
     * Paradox.engine.saveGameData().then( (gameData)=>{});
     * ```
     */
    saveGameData(): Promise<any>;
}
