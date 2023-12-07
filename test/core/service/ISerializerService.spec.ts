import ISerializerService from "../../../lib/core/service/ISerializerService";
import { setup } from "../../setup.spec";
import { Container, Facade, IStoreModel } from "@thetinyspark/coffe-maker";
import AppConst from "../../../lib/core/ioc/app.const";
import * as mock from "../../mock.spec";
import IFactory from "../../../lib/core/service/factory/IFactory";
import Building from "../../../lib/core/model/schema/building/Building";

describe("ISerializerService test suite", () => {
  it("should be able serialize this into a json or object", () => {
    // given
    const container = new Container();
    const facade = setup(container) as Facade;
    const serializer = facade.getService(AppConst.SERIALIZER_SERVICE) as ISerializerService;
    const storage = container.resolve(AppConst.GAME_STORE_MODEL) as IStoreModel;
    
    // when
    facade.sendNotification(AppConst.ADD_CITY, mock.SHANGRILA() );
    const expected = {
      cities: [mock.SHANGRILA()], 
      resources: mock.RESOURCES_MOCK, 
      templateBuildings: mock.TEMPLATE_BUILDINGS_MOCK
    }; 

    const state = storage.getState();
    const results1 = serializer.serialize(state.cities, state.templateBuildings, state.resources, "json");
    const results2 = serializer.serialize(state.cities, state.templateBuildings, state.resources, "raw");
    // then
    expect(results1).toBeInstanceOf(String);  
    expect(results2).toBeInstanceOf(Object);  
  });

  it("should be able to convert data into obj", () => {
    // given
    const container = new Container();
    const facade = setup(container) as Facade;
    const serializer = facade.getService(AppConst.SERIALIZER_SERVICE) as ISerializerService;
    const storage = container.resolve(AppConst.GAME_STORE_MODEL) as IStoreModel;
    
    // when
    facade.sendNotification(AppConst.ADD_CITY, mock.SHANGRILA() );
    const expected = {
      cities: [mock.SHANGRILA()], 
      resources: mock.RESOURCES_MOCK, 
      templateBuildings: mock.TEMPLATE_BUILDINGS_MOCK
    }; 

    const state = storage.getState();
    const results = serializer.convertToObj(state.cities, state.templateBuildings, state.resources);
    // then
    expect(expected).toEqual(results);  
  });

  it("should be able to convert a resource to an object", () => {
    // given
    const facade = setup() as Facade;
    const serializer = facade.getService(AppConst.SERIALIZER_SERVICE) as ISerializerService;
    const factory = facade.getService(AppConst.RESOURCE_FACTORY) as IFactory;
    // when


    const expected = mock.RESOURCES_MOCK; 
    const results = mock.RESOURCES_MOCK.map( 
      (resourceData:any)=>{
        return serializer.resourceToObject( factory.fromData(resourceData));
      }
    );
    // then
    expect(results).toEqual(expected);;  
  });

  it("should be able to convert a building to an object", () => {
    // given
    const facade = setup() as Facade;
    const serializer = facade.getService(AppConst.SERIALIZER_SERVICE) as ISerializerService;
    const factory = facade.getService(AppConst.BUILDING_FACTORY) as IFactory;

    const build = new Building("");
    // when
    
    const expected1 = mock.SHANGRILA().buildings[0];
    const expected2 = {...expected1, id:10, frozen:true};

    const results1 = serializer.buildingToObject( factory.fromData(expected1));
    const results2 = serializer.buildingToObject( factory.fromData(expected2));
    const results3 = serializer.buildingToObject( build );
    // then
    expect(results1).toEqual(expected1); 
    expect(results2).toEqual(expected2);
    expect(results3).not.toBeNull();
  });

  it("should be able to convert a quantity to an object", () => {
    // given
    const facade = setup() as Facade;
    const serializer = facade.getService(AppConst.SERIALIZER_SERVICE) as ISerializerService;
    const factory = facade.getService(AppConst.QUANTITY_FACTORY) as IFactory;
    // when


    const expected = mock.QUANTITIES_MOCK; 
    const results = mock.QUANTITIES_MOCK.map( 
      (data:any)=>{
        return serializer.quantityToObject( factory.fromData(data));
      }
    );
    // then
    expect(results).toEqual(expected);
  });

  it("should be able to convert a quantityList to an object", () => {
    // given
    const facade = setup() as Facade;
    const serializer = facade.getService(AppConst.SERIALIZER_SERVICE) as ISerializerService;
    const factory = facade.getService(AppConst.QUANTITY_LIST_FACTORY) as IFactory;
    // when


    const expected = mock.QUANTITIES_MOCK; 
    const list = factory.fromData(mock.QUANTITIES_MOCK);
    const results = serializer.quantityListToObject(list);
    // then
    expect(results).toEqual(expected);
  });

  it("should be able to convert a buildingLevel to an object", () => {
    // given
    const facade = setup() as Facade;
    const serializer = facade.getService(AppConst.SERIALIZER_SERVICE) as ISerializerService;
    const factory = facade.getService(AppConst.BUILDING_LEVEL_FACTORY) as IFactory;
    // when


    const expected = mock.TEMPLATE_BUILDINGS_MOCK[0].levels[0]; 
    const level = factory.fromData(expected);
    const results = serializer.buildingLevelToObject(level);
    // then
    expect(results).toEqual(expected); 
  });

  it("should be able to convert a template building to an object", () => {
    // given
    const facade = setup() as Facade;
    const serializer = facade.getService(AppConst.SERIALIZER_SERVICE) as ISerializerService;
    const factory = facade.getService(AppConst.TEMPLATE_BUILDING_FACTORY) as IFactory;
    // when


    const expected = mock.TEMPLATE_BUILDINGS_MOCK[0]; 
    const tpl = factory.fromData(expected);
    const results = serializer.templateBuildingToObject(tpl);
    // then
    expect(results).toEqual(expected);
  });

  it("should be able to convert a city to an object", () => {
    // given
    const facade = setup() as Facade;
    const serializer = facade.getService(AppConst.SERIALIZER_SERVICE) as ISerializerService;
    const factory = facade.getService(AppConst.CITY_FACTORY) as IFactory;
    // when


    const expected = mock.SHANGRILA(); 
    const city = factory.fromData(expected);
    console.log(city);
    const results = serializer.cityToObject(city);
    // then
    expect(results).toEqual(expected);
  });
});
