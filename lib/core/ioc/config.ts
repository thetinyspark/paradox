import { Container, Facade, StoreModel } from "@thetinyspark/coffe-maker";
import AppConst from "./app.const";
import AddBuildingToCityCommand from "../command/AddBuildingToCityCommand";
import AddCityCommand from "../command/AddCityCommand";
import CreateResourcesCommand from "../command/CreateResourcesCommand";
import CreateTemplateBuildingsCommand from "../command/CreateTemplateBuildingsCommand";
import DoCycleCommand from "../command/DoCycleCommand";
import GetCitiesQuery from "../command/GetCitiesQuery";
import GetResourcesQuery from "../command/GetResourcesQuery";
import GetTemplateBuildingsQuery from "../command/GetTemplateBuildingsQuery";
import CityRepository from "../model/repository/CityRepository";
import ResourceRepository from "../model/repository/ResourceRepository";
import TemplateBuildingRepository from "../model/repository/TemplateBuildingRepository";
import Repository from "../model/repository/Repository";
import BuyBuildingCommand from "../command/BuyBuildingCommand";
import UpgradeBuildingCommand from "../command/UpgradeBuildingCommand";
import BuildingFactory from "../service/factory/BuildingFactory";
import CityFactory from "../service/factory/CityFactory";
import ResourceFactory from "../service/factory/ResourceFactory";
import QuantityFactory from "../service/factory/QuantityFactory";
import QuantityListFactory from "../service/factory/QuantityListFactory";
import BuildingLevelFactory from "../service/factory/BuildingLevelFactory";
import TemplateBuildingFactory from "../service/factory/TemplateBuildingFactory";
import PaymentService from "../service/PaymentService";
import SerializerService from "../service/SerializerService";
import SaveGameDataQuery from "../command/SaveGameDataQuery";
import CreateCitiesCommand from "../command/CreateCitiesCommand";
import RestoreSavedDataCommand from "../command/RestoreSavedDataCommand";
import GetCityQuery from "../command/GetCityQuery";
import RemoveBuildingCommand from "../command/RemoveBuildingCommand";
import SellBuildingCommand from "../command/SellBuildingCommand";
import UIDService from "../service/UIDService";


export function configIOC(container:Container){
    container.reset();
    container.register(AppConst.GAME_STORE_MODEL                , ()=>  new StoreModel()                        , true  )
    container.register(AppConst.APP_FACADE                      , ()=>  new Facade()                            , true  );
    container.register(AppConst.BUY_BUILDING                    , ()=>  new BuyBuildingCommand()                );
    container.register(AppConst.ADD_BUILDING_TO_CITY            , ()=>  new AddBuildingToCityCommand()          );
    container.register(AppConst.SELL_BUILDING                   , ()=>  new SellBuildingCommand()             );
    container.register(AppConst.REMOVE_BUILDING_FROM_CITY       , ()=>  new RemoveBuildingCommand()             );
    container.register(AppConst.UPGRADE_BUILDING                , ()=>  new UpgradeBuildingCommand()            );
    container.register(AppConst.ADD_CITY                        , ()=>  new AddCityCommand()                    );
    container.register(AppConst.CREATE_CITIES                   , ()=>  new CreateCitiesCommand()               );
    container.register(AppConst.CREATE_RESOURCES                , ()=>  new CreateResourcesCommand()            );
    container.register(AppConst.RESTORE_SAVED_DATA              , ()=>  new RestoreSavedDataCommand()            );
    container.register(AppConst.CREATE_TEMPLATE_BUILDINGS       , ()=>  new CreateTemplateBuildingsCommand()    );
    container.register(AppConst.DO_CYCLE                        , ()=>  new DoCycleCommand()                    );
    container.register(AppConst.GET_CITIES_QUERY                , ()=>  new GetCitiesQuery()                    );
    container.register(AppConst.GET_CITY_QUERY                  , ()=>  new GetCityQuery()                      );
    container.register(AppConst.GET_RESOURCES_QUERY             , ()=>  new GetResourcesQuery()                 );
    container.register(AppConst.SAVE_GAME_DATA_QUERY            , ()=>  new SaveGameDataQuery()                 );
    container.register(AppConst.GET_TEMPLATES_BUILDINGS_QUERY   , ()=>  new GetTemplateBuildingsQuery()         );

    container.register(AppConst.CITY_REPOSITORY                 , ()=>  new CityRepository(
                                                                            container.resolve(AppConst.GAME_STORE_MODEL), 
                                                                            "cities"
                                                                        )            
                                                                        , true  
    );
    container.register(AppConst.TEMPLATE_BUILDING_REPOSITORY    , ()=>  new TemplateBuildingRepository(
                                                                            container.resolve(AppConst.GAME_STORE_MODEL), 
                                                                            "templateBuildings"
                                                                        )            
                                                                        , true  
    );
    container.register(AppConst.RESOURCE_REPOSITORY             , ()=>  new ResourceRepository(
                                                                            container.resolve(AppConst.GAME_STORE_MODEL), 
                                                                            "resources"
                                                                        )            
                                                                        , true  
    );
    container.register(AppConst.BASE_REPOSITORY                 , ()=>  new Repository<any>(
                                                                            container.resolve(AppConst.GAME_STORE_MODEL), 
                                                                            "data"
                                                                        )            
                                                                        , true  
    );

    container.register( AppConst.BUILDING_FACTORY, 
                        ()=>  new BuildingFactory(
                                container.resolve(AppConst.TEMPLATE_BUILDING_REPOSITORY), 
                                container.resolve(AppConst.UID_SERVICE)
                            ), 
                        true
    );
    container.register( AppConst.CITY_FACTORY, 
                        ()=>  {
                            return new CityFactory(
                                container.resolve(AppConst.BUILDING_FACTORY),
                                container.resolve(AppConst.QUANTITY_LIST_FACTORY),
                            )
                        }, 
                        true
    );
    container.register( AppConst.QUANTITY_LIST_FACTORY, 
                        ()=>  {
                            return new QuantityListFactory(container.resolve(AppConst.QUANTITY_FACTORY))
                        }, 
                        true
    );
    container.register( AppConst.BUILDING_LEVEL_FACTORY, 
                        ()=>  {
                            return new BuildingLevelFactory(container.resolve(AppConst.QUANTITY_LIST_FACTORY))
                        }, 
                        true
    );
    container.register( AppConst.TEMPLATE_BUILDING_FACTORY, 
                        ()=>  {
                            return new TemplateBuildingFactory(container.resolve(AppConst.BUILDING_LEVEL_FACTORY))
                        }, 
                        true
    );
    container.register( AppConst.QUANTITY_FACTORY, 
                        ()=>  {
                            return new QuantityFactory(container.resolve(AppConst.RESOURCE_REPOSITORY))
                        }, 
                        true
    );

    container.register( AppConst.RESOURCE_FACTORY,      ()=>  new ResourceFactory(), true);
    container.register( AppConst.PAYMENT_SERVICE,       ()=>  new PaymentService(), true);
    container.register( AppConst.SERIALIZER_SERVICE ,   ()=>  new SerializerService(), true);
    container.register( AppConst.UID_SERVICE        ,   ()=>  new UIDService(), true);
    return container;
}

export function configFacade(container:Container){
    const facade = container.resolve(AppConst.APP_FACADE);
    facade.registerCommand( AppConst.SELL_BUILDING                  , container.get(AppConst.SELL_BUILDING));
    facade.registerCommand( AppConst.REMOVE_BUILDING_FROM_CITY      , container.get(AppConst.REMOVE_BUILDING_FROM_CITY));
    facade.registerCommand( AppConst.UPGRADE_BUILDING               , container.get(AppConst.UPGRADE_BUILDING));
    facade.registerCommand( AppConst.ADD_BUILDING_TO_CITY           , container.get(AppConst.ADD_BUILDING_TO_CITY));
    facade.registerCommand( AppConst.BUY_BUILDING                   , container.get(AppConst.BUY_BUILDING));
    facade.registerCommand( AppConst.ADD_CITY                       , container.get(AppConst.ADD_CITY));
    facade.registerCommand( AppConst.CREATE_CITIES                  , container.get(AppConst.CREATE_CITIES));
    facade.registerCommand( AppConst.CREATE_RESOURCES               , container.get(AppConst.CREATE_RESOURCES));
    facade.registerCommand( AppConst.RESTORE_SAVED_DATA             , container.get(AppConst.RESTORE_SAVED_DATA));
    facade.registerCommand( AppConst.CREATE_TEMPLATE_BUILDINGS      , container.get(AppConst.CREATE_TEMPLATE_BUILDINGS));
    facade.registerCommand( AppConst.DO_CYCLE                       , container.get(AppConst.DO_CYCLE));
    facade.registerCommand( AppConst.GET_CITIES_QUERY               , container.get(AppConst.GET_CITIES_QUERY));
    facade.registerCommand( AppConst.GET_CITY_QUERY                 , container.get(AppConst.GET_CITY_QUERY));
    facade.registerCommand( AppConst.GET_RESOURCES_QUERY            , container.get(AppConst.GET_RESOURCES_QUERY));
    facade.registerCommand( AppConst.GET_TEMPLATES_BUILDINGS_QUERY  , container.get(AppConst.GET_TEMPLATES_BUILDINGS_QUERY));
    facade.registerCommand( AppConst.SAVE_GAME_DATA_QUERY           , container.get(AppConst.SAVE_GAME_DATA_QUERY));

    facade.registerProxy( AppConst.CITY_REPOSITORY                  , container.resolve(AppConst.CITY_REPOSITORY)               );
    facade.registerProxy( AppConst.TEMPLATE_BUILDING_REPOSITORY     , container.resolve(AppConst.TEMPLATE_BUILDING_REPOSITORY)  );
    facade.registerProxy( AppConst.CITY_REPOSITORY                  , container.resolve(AppConst.CITY_REPOSITORY)               );
    facade.registerProxy( AppConst.RESOURCE_REPOSITORY              , container.resolve(AppConst.RESOURCE_REPOSITORY)           );

    facade.registerService( AppConst.BUILDING_FACTORY               , container.resolve(AppConst.BUILDING_FACTORY)              );
    facade.registerService( AppConst.CITY_FACTORY                   , container.resolve(AppConst.CITY_FACTORY)                  );
    facade.registerService( AppConst.RESOURCE_FACTORY               , container.resolve(AppConst.RESOURCE_FACTORY)              );
    facade.registerService( AppConst.QUANTITY_FACTORY               , container.resolve(AppConst.QUANTITY_FACTORY)              );
    facade.registerService( AppConst.QUANTITY_LIST_FACTORY          , container.resolve(AppConst.QUANTITY_LIST_FACTORY)         );
    facade.registerService( AppConst.BUILDING_LEVEL_FACTORY         , container.resolve(AppConst.BUILDING_LEVEL_FACTORY)        );
    facade.registerService( AppConst.TEMPLATE_BUILDING_FACTORY      , container.resolve(AppConst.TEMPLATE_BUILDING_FACTORY)     );
    facade.registerService( AppConst.PAYMENT_SERVICE                , container.resolve(AppConst.PAYMENT_SERVICE)               );
    facade.registerService( AppConst.SERIALIZER_SERVICE             , container.resolve(AppConst.SERIALIZER_SERVICE)            );
    facade.registerService( AppConst.UID_SERVICE                    , container.resolve(AppConst.UID_SERVICE)                   );
    return facade;
}
