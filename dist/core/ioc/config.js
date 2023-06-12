"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configFacade = exports.configIOC = void 0;
const coffe_maker_1 = require("@thetinyspark/coffe-maker");
const app_const_1 = require("./app.const");
const AddBuildingToCityCommand_1 = require("../command/AddBuildingToCityCommand");
const AddCityCommand_1 = require("../command/AddCityCommand");
const CreateResourcesCommand_1 = require("../command/CreateResourcesCommand");
const CreateTemplateBuildingsCommand_1 = require("../command/CreateTemplateBuildingsCommand");
const DoCycleCommand_1 = require("../command/DoCycleCommand");
const GetCitiesQuery_1 = require("../command/GetCitiesQuery");
const GetResourcesQuery_1 = require("../command/GetResourcesQuery");
const GetTemplateBuildingsQuery_1 = require("../command/GetTemplateBuildingsQuery");
const CityRepository_1 = require("../model/repository/CityRepository");
const ResourceRepository_1 = require("../model/repository/ResourceRepository");
const TemplateBuildingRepository_1 = require("../model/repository/TemplateBuildingRepository");
const Repository_1 = require("../model/repository/Repository");
const BuyBuildingCommand_1 = require("../command/BuyBuildingCommand");
const UpgradeBuildingCommand_1 = require("../command/UpgradeBuildingCommand");
const BuildingFactory_1 = require("../service/factory/BuildingFactory");
const CityFactory_1 = require("../service/factory/CityFactory");
const ResourceFactory_1 = require("../service/factory/ResourceFactory");
const QuantityFactory_1 = require("../service/factory/QuantityFactory");
const QuantityListFactory_1 = require("../service/factory/QuantityListFactory");
const BuildingLevelFactory_1 = require("../service/factory/BuildingLevelFactory");
const TemplateBuildingFactory_1 = require("../service/factory/TemplateBuildingFactory");
const PaymentService_1 = require("../service/PaymentService");
const SerializerService_1 = require("../service/SerializerService");
const SaveGameDataQuery_1 = require("../command/SaveGameDataQuery");
const CreateCitiesCommand_1 = require("../command/CreateCitiesCommand");
const RestoreSavedDataCommand_1 = require("../command/RestoreSavedDataCommand");
const GetCityQuery_1 = require("../command/GetCityQuery");
const RemoveBuildingCommand_1 = require("../command/RemoveBuildingCommand");
const SellBuildingCommand_1 = require("../command/SellBuildingCommand");
const UIDService_1 = require("../service/UIDService");
const RemoveCityCommand_1 = require("../command/RemoveCityCommand");
function configIOC(container) {
    container.reset();
    container.register(app_const_1.default.GAME_STORE_MODEL, () => new coffe_maker_1.StoreModel(), true);
    container.register(app_const_1.default.APP_FACADE, () => new coffe_maker_1.Facade(), true);
    container.register(app_const_1.default.BUY_BUILDING, () => new BuyBuildingCommand_1.default());
    container.register(app_const_1.default.ADD_BUILDING_TO_CITY, () => new AddBuildingToCityCommand_1.default());
    container.register(app_const_1.default.SELL_BUILDING, () => new SellBuildingCommand_1.default());
    container.register(app_const_1.default.REMOVE_BUILDING_FROM_CITY, () => new RemoveBuildingCommand_1.default());
    container.register(app_const_1.default.UPGRADE_BUILDING, () => new UpgradeBuildingCommand_1.default());
    container.register(app_const_1.default.ADD_CITY, () => new AddCityCommand_1.default());
    container.register(app_const_1.default.REMOVE_CITY, () => new RemoveCityCommand_1.default());
    container.register(app_const_1.default.CREATE_CITIES, () => new CreateCitiesCommand_1.default());
    container.register(app_const_1.default.CREATE_RESOURCES, () => new CreateResourcesCommand_1.default());
    container.register(app_const_1.default.RESTORE_SAVED_DATA, () => new RestoreSavedDataCommand_1.default());
    container.register(app_const_1.default.CREATE_TEMPLATE_BUILDINGS, () => new CreateTemplateBuildingsCommand_1.default());
    container.register(app_const_1.default.DO_CYCLE, () => new DoCycleCommand_1.default());
    container.register(app_const_1.default.GET_CITIES_QUERY, () => new GetCitiesQuery_1.default());
    container.register(app_const_1.default.GET_CITY_QUERY, () => new GetCityQuery_1.default());
    container.register(app_const_1.default.GET_RESOURCES_QUERY, () => new GetResourcesQuery_1.default());
    container.register(app_const_1.default.SAVE_GAME_DATA_QUERY, () => new SaveGameDataQuery_1.default());
    container.register(app_const_1.default.GET_TEMPLATES_BUILDINGS_QUERY, () => new GetTemplateBuildingsQuery_1.default());
    container.register(app_const_1.default.CITY_REPOSITORY, () => new CityRepository_1.default(container.resolve(app_const_1.default.GAME_STORE_MODEL), "cities"), true);
    container.register(app_const_1.default.TEMPLATE_BUILDING_REPOSITORY, () => new TemplateBuildingRepository_1.default(container.resolve(app_const_1.default.GAME_STORE_MODEL), "templateBuildings"), true);
    container.register(app_const_1.default.RESOURCE_REPOSITORY, () => new ResourceRepository_1.default(container.resolve(app_const_1.default.GAME_STORE_MODEL), "resources"), true);
    container.register(app_const_1.default.BASE_REPOSITORY, () => new Repository_1.default(container.resolve(app_const_1.default.GAME_STORE_MODEL), "data"), true);
    container.register(app_const_1.default.BUILDING_FACTORY, () => new BuildingFactory_1.default(container.resolve(app_const_1.default.TEMPLATE_BUILDING_REPOSITORY), container.resolve(app_const_1.default.UID_SERVICE)), true);
    container.register(app_const_1.default.CITY_FACTORY, () => {
        return new CityFactory_1.default(container.resolve(app_const_1.default.BUILDING_FACTORY), container.resolve(app_const_1.default.QUANTITY_LIST_FACTORY), container.resolve(app_const_1.default.UID_SERVICE));
    }, true);
    container.register(app_const_1.default.QUANTITY_LIST_FACTORY, () => {
        return new QuantityListFactory_1.default(container.resolve(app_const_1.default.QUANTITY_FACTORY));
    }, true);
    container.register(app_const_1.default.BUILDING_LEVEL_FACTORY, () => {
        return new BuildingLevelFactory_1.default(container.resolve(app_const_1.default.QUANTITY_LIST_FACTORY));
    }, true);
    container.register(app_const_1.default.TEMPLATE_BUILDING_FACTORY, () => {
        return new TemplateBuildingFactory_1.default(container.resolve(app_const_1.default.BUILDING_LEVEL_FACTORY), container.resolve(app_const_1.default.UID_SERVICE));
    }, true);
    container.register(app_const_1.default.QUANTITY_FACTORY, () => {
        return new QuantityFactory_1.default(container.resolve(app_const_1.default.RESOURCE_REPOSITORY));
    }, true);
    container.register(app_const_1.default.RESOURCE_FACTORY, () => new ResourceFactory_1.default(container.resolve(app_const_1.default.UID_SERVICE)), true);
    container.register(app_const_1.default.PAYMENT_SERVICE, () => new PaymentService_1.default(), true);
    container.register(app_const_1.default.SERIALIZER_SERVICE, () => new SerializerService_1.default(), true);
    container.register(app_const_1.default.UID_SERVICE, () => new UIDService_1.default(), true);
    return container;
}
exports.configIOC = configIOC;
function configFacade(container) {
    const facade = container.resolve(app_const_1.default.APP_FACADE);
    facade.registerCommand(app_const_1.default.SELL_BUILDING, container.get(app_const_1.default.SELL_BUILDING));
    facade.registerCommand(app_const_1.default.REMOVE_BUILDING_FROM_CITY, container.get(app_const_1.default.REMOVE_BUILDING_FROM_CITY));
    facade.registerCommand(app_const_1.default.UPGRADE_BUILDING, container.get(app_const_1.default.UPGRADE_BUILDING));
    facade.registerCommand(app_const_1.default.ADD_BUILDING_TO_CITY, container.get(app_const_1.default.ADD_BUILDING_TO_CITY));
    facade.registerCommand(app_const_1.default.BUY_BUILDING, container.get(app_const_1.default.BUY_BUILDING));
    facade.registerCommand(app_const_1.default.ADD_CITY, container.get(app_const_1.default.ADD_CITY));
    facade.registerCommand(app_const_1.default.REMOVE_CITY, container.get(app_const_1.default.REMOVE_CITY));
    facade.registerCommand(app_const_1.default.CREATE_CITIES, container.get(app_const_1.default.CREATE_CITIES));
    facade.registerCommand(app_const_1.default.CREATE_RESOURCES, container.get(app_const_1.default.CREATE_RESOURCES));
    facade.registerCommand(app_const_1.default.RESTORE_SAVED_DATA, container.get(app_const_1.default.RESTORE_SAVED_DATA));
    facade.registerCommand(app_const_1.default.CREATE_TEMPLATE_BUILDINGS, container.get(app_const_1.default.CREATE_TEMPLATE_BUILDINGS));
    facade.registerCommand(app_const_1.default.DO_CYCLE, container.get(app_const_1.default.DO_CYCLE));
    facade.registerCommand(app_const_1.default.GET_CITIES_QUERY, container.get(app_const_1.default.GET_CITIES_QUERY));
    facade.registerCommand(app_const_1.default.GET_CITY_QUERY, container.get(app_const_1.default.GET_CITY_QUERY));
    facade.registerCommand(app_const_1.default.GET_RESOURCES_QUERY, container.get(app_const_1.default.GET_RESOURCES_QUERY));
    facade.registerCommand(app_const_1.default.GET_TEMPLATES_BUILDINGS_QUERY, container.get(app_const_1.default.GET_TEMPLATES_BUILDINGS_QUERY));
    facade.registerCommand(app_const_1.default.SAVE_GAME_DATA_QUERY, container.get(app_const_1.default.SAVE_GAME_DATA_QUERY));
    facade.registerProxy(app_const_1.default.CITY_REPOSITORY, container.resolve(app_const_1.default.CITY_REPOSITORY));
    facade.registerProxy(app_const_1.default.TEMPLATE_BUILDING_REPOSITORY, container.resolve(app_const_1.default.TEMPLATE_BUILDING_REPOSITORY));
    facade.registerProxy(app_const_1.default.CITY_REPOSITORY, container.resolve(app_const_1.default.CITY_REPOSITORY));
    facade.registerProxy(app_const_1.default.RESOURCE_REPOSITORY, container.resolve(app_const_1.default.RESOURCE_REPOSITORY));
    facade.registerService(app_const_1.default.BUILDING_FACTORY, container.resolve(app_const_1.default.BUILDING_FACTORY));
    facade.registerService(app_const_1.default.CITY_FACTORY, container.resolve(app_const_1.default.CITY_FACTORY));
    facade.registerService(app_const_1.default.RESOURCE_FACTORY, container.resolve(app_const_1.default.RESOURCE_FACTORY));
    facade.registerService(app_const_1.default.QUANTITY_FACTORY, container.resolve(app_const_1.default.QUANTITY_FACTORY));
    facade.registerService(app_const_1.default.QUANTITY_LIST_FACTORY, container.resolve(app_const_1.default.QUANTITY_LIST_FACTORY));
    facade.registerService(app_const_1.default.BUILDING_LEVEL_FACTORY, container.resolve(app_const_1.default.BUILDING_LEVEL_FACTORY));
    facade.registerService(app_const_1.default.TEMPLATE_BUILDING_FACTORY, container.resolve(app_const_1.default.TEMPLATE_BUILDING_FACTORY));
    facade.registerService(app_const_1.default.PAYMENT_SERVICE, container.resolve(app_const_1.default.PAYMENT_SERVICE));
    facade.registerService(app_const_1.default.SERIALIZER_SERVICE, container.resolve(app_const_1.default.SERIALIZER_SERVICE));
    facade.registerService(app_const_1.default.UID_SERVICE, container.resolve(app_const_1.default.UID_SERVICE));
    return facade;
}
exports.configFacade = configFacade;
