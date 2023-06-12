import ISerializerService from "../../../lib/core/service/ISerializerService";
import { setup } from "../../setup.spec";
import { Container, Facade, IStoreModel } from "@thetinyspark/coffe-maker";
import AppConst from "../../../lib/core/ioc/app.const";
import * as mock from "../../mock.spec";
import IFactory from "../../../lib/core/service/factory/IFactory";

describe("ISerializerService test suite", () => {
  it("should be able to create a building from data according to its template", () => {
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
    const results = serializer.cityToObject(city);
    // then
    expect(results).toEqual(expected);
  });
});
