import { setupEngine } from "../setup.spec";
import Engine from "../../lib/core/Engine";
import { ATLANTIS, RESOURCES_MOCK, SAVED_DATA, SHANGRILA, TEMPLATE_BUILDINGS_MOCK, YS } from "../mock.spec";

describe("Engine test suite", () => {
    var engine:Engine;
    

    beforeEach(
        ()=>{
            engine = setupEngine();
        }
    );

    // get serializer service
    it('should be able to return the serializer service', 
    ()=>{
        expect(engine.getSerializer()).not.toBeNull();
    })

    // game data
    it("should restore game data", 
        async () => {
            // given
            engine.restoreGameData(SAVED_DATA);
            // when 
            const cities = await engine.getCities();
            const templates = await engine.getTemplateBuildings();
            const resources = await engine.getResources();

            // then
            expect(cities.length).toEqual(SAVED_DATA.cities?.length || -1);
            expect(templates.length).toEqual(SAVED_DATA.templateBuildings?.length || -1);
            expect(resources.length).toEqual(SAVED_DATA.resources?.length || -1);
        }   
    );

    it("should be able to save game data", 
        async () => {
            // given
            engine.restoreGameData(SAVED_DATA);
            // when 
            const save = await engine.saveGameData();

            // then
            expect(save).toEqual(SAVED_DATA);
        }   
    );

    it("should be able to reset the engine's data", 
        async () => {
            // given
            engine.reset();
            engine.restoreGameData(SAVED_DATA);
            
            // when 
            const cities1       = await engine.getCities();
            const templates1    = await engine.getTemplateBuildings();
            const resources1    = await engine.getResources();
            
            engine.reset();
            engine.restoreGameData(SAVED_DATA);

            engine.reset();
            const cities2       = await engine.getCities();
            const templates2    = await engine.getTemplateBuildings();
            const resources2    = await engine.getResources();

            // then
            expect(cities1).not.toEqual([]);
            expect(cities2).toEqual([]);

            expect(templates1).not.toEqual([]);
            expect(templates2).toEqual([]);

            expect(resources1).not.toEqual([]);
            expect(resources2).toEqual([]);
        }   
    );


    // cities
    it("should be able to add a city", 
        async () => {
            // given
            const addedCity = await engine.addCity(ATLANTIS());
            // when 
            const cities = await engine.getCities();

            // then
            expect(cities.length).toEqual(1);
            expect(addedCity).toBeTruthy();
            expect(addedCity.id).toEqual(ATLANTIS().id);
        }   
    );

    it("should be able to remove a city", 
        async () => {
            // given
            engine.addCity(ATLANTIS());
            // when 
            const cities = await engine.getCities();
            engine.removeCity({id:cities[0].id});

            // then
            expect(cities.length).toEqual(0);
        }   
    );

    it("should be able to creates multiple cities at once", 
        async () => {
            // given
            engine.reset();

            // when 
            engine.createCities([ATLANTIS(),SHANGRILA(),YS()]);
            const cities = await engine.getCities();

            // then
            expect(cities.length).toEqual(3);
        }   
    );

    it("should be able to get a city by its id", 
        async () => {
            // given
            engine.reset();

            // when 
            engine.createCities([ATLANTIS(),SHANGRILA(),YS()]);
            const shangrila = await engine.getCityByID({id:2});

            // then
            expect(shangrila.id).toEqual(2);
            expect(shangrila.name).toEqual(SHANGRILA().name);
        }   
    );


    // resources
    it("should be able to create/get multiple resources at once", 
        async () => {
            // given
            engine.reset();

            // when 
            engine.createResources(RESOURCES_MOCK);
            const results = await engine.getResources();

            // then
            expect(results.length).toEqual(RESOURCES_MOCK.length);
        }   
    );


    // templates
    it("should be able to create/get multiple templates at once", 
        async () => {
            // given
            engine.reset();

            // when 
            engine.createBuildingTemplates(TEMPLATE_BUILDINGS_MOCK);
            const results = await engine.getTemplateBuildings();

            // then
            expect(results.length).toEqual(TEMPLATE_BUILDINGS_MOCK.length);
        }   
    );


    // buildings
    it("should be able to add a building for free to a city", 
        async () => {
            // given
            engine.reset();
            const data = ATLANTIS();

            // when 
            engine.createResources(RESOURCES_MOCK);
            engine.createBuildingTemplates(TEMPLATE_BUILDINGS_MOCK);
            engine.addCity(data);
            const ok1 = await engine.addBuilding({cityID: data.id, tplID: 1})
            const cities = await engine.getCities();

            // then
            expect(ok1).toBeTrue();
            expect(cities[0].buildings.length).toEqual(1);
        }   
    );

    it("should be able to freeze a building", 
    async () => {
            // given
            engine.reset();
            const data = ATLANTIS();

            // when 
            engine.createResources(RESOURCES_MOCK);
            engine.createBuildingTemplates(TEMPLATE_BUILDINGS_MOCK);
            engine.addCity(data);
            engine.addBuilding({cityID: data.id, tplID: 1})
            const ok = await engine.setBuildingFrozenStatus({cityID: data.id, id: 1, frozen: true})
            const cities = await engine.getCities();

            // then
            expect(cities[0].buildings[0].frozen).toBeTrue();
            expect(ok).toBeTrue();
        }   
    );

    it("should be able to buy a building and add it to a city if wallet has enough resources", 
        async () => {
            // given
            engine.reset();
            engine.createResources(RESOURCES_MOCK);
            engine.createBuildingTemplates(TEMPLATE_BUILDINGS_MOCK);
            
            // when 
            const data = ATLANTIS();
            engine.addCity(data);
            const ok = await engine.buyBuilding({cityID: data.id, tplID: 1});
            const cities = await engine.getCities();

            // then
            expect(ok).toBeTrue();
            expect(cities[0].buildings.length).toEqual(1);
        }   
    );

    it("should be able to upgrade a building if wallet has enough resources", 
        async () => {
            // given
            engine.reset();
            engine.createResources(RESOURCES_MOCK);
            engine.createBuildingTemplates(TEMPLATE_BUILDINGS_MOCK);
            
            // when 
            const data = ATLANTIS();
            engine.addCity(data);
            engine.addBuilding({cityID: data.id, tplID: 1});
            const ok = await engine.upgradeBuilding({cityID: data.id, id: 1});
            const cities = await engine.getCities();

            // then
            expect(ok).toBeTrue();
            expect(cities[0].buildings[0].level.level).toEqual(2);
        }   
    );

    it("should be able to remove a building from a city", 
        async () => {
            // given
            engine.reset();
            engine.createResources(RESOURCES_MOCK);
            engine.createBuildingTemplates(TEMPLATE_BUILDINGS_MOCK);
            
            // when 
            const data = ATLANTIS();
            engine.addCity(data);
            engine.addBuilding({tplID:1, cityID:data.id});
            const ok = await engine.removeBuilding({id:1, cityID:data.id});
            const cities = await engine.getCities();

            // then
            expect(ok).toBeTrue();
            expect(cities[0].buildings.length).toEqual(0);
        }   
    );

    it("should be able to sell a building and remove it from a city", 
        async () => {
            // given
            engine.reset();
            engine.createResources(RESOURCES_MOCK);
            engine.createBuildingTemplates(TEMPLATE_BUILDINGS_MOCK);
            
            // when 
            const data = ATLANTIS();
            engine.addCity(data);
            engine.addBuilding({tplID:1, cityID:data.id});
            const ok = await engine.sellBuilding({id:1, cityID:data.id});
            const cities = await engine.getCities();

            // then
            expect(ok).toBeTrue();
            expect(cities[0].buildings.length).toEqual(0);
        }   
    );


    // cycle
    it("should be able to process a cycle", 
        async () => {
            // given
            engine.reset();
            engine.createResources(RESOURCES_MOCK);
            engine.createBuildingTemplates(TEMPLATE_BUILDINGS_MOCK);
            
            // when 
            const data = ATLANTIS();
            engine.addCity(data);
            engine.addBuilding({tplID:1, cityID:data.id});
            const city = await engine.getCityByID({id:data.id});
            city.wallet.set([]);
            engine.doCycle();

            // then
            expect(city.wallet.get().length).not.toEqual(0);
        }   
    );

    
    // version
    it("should be able return version and facade", 
        async () => {
            expect(engine.getVersion()).not.toBeNull();
            expect(engine.getFacade()).not.toBeNull();
        }   
    );
});
