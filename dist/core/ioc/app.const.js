"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppConst {
}
exports.default = AppConst;
// facade
AppConst.APP_FACADE = "AppFacade";
// model
AppConst.GAME_STORE_MODEL = "GameStoreModel";
// commands
AppConst.SET_BUILDING_FROZEN_STATUS = "SetBuildingFrozenStatus";
AppConst.SELL_BUILDING = "SellBuildingCommand";
AppConst.REMOVE_BUILDING_FROM_CITY = "RemoveBuildingFromCityCommand";
AppConst.ADD_BUILDING_TO_CITY = "AddBuildingToCityCommand";
AppConst.UPGRADE_BUILDING = "UpgradeBuildingCommand";
AppConst.ADD_CITY = "AddCityCommand";
AppConst.REMOVE_CITY = "RemoveCityCommand";
AppConst.BUY_BUILDING = "BuyBuildingCommand";
AppConst.CREATE_RESOURCES = "CreateResourcesCommand";
AppConst.CREATE_CITIES = "CreateCitiesCommand";
AppConst.CREATE_TEMPLATE_BUILDINGS = "CreateTemplateBuildingsCommand";
AppConst.RESTORE_SAVED_DATA = "RestoreSavedDataCommand";
AppConst.DO_CYCLE = "DoCycleCommand";
// queries
AppConst.GET_CITY_QUERY = "GetCityQuery";
AppConst.GET_CITIES_QUERY = "GetCitiesQuery";
AppConst.GET_RESOURCES_QUERY = "GetResourcesQuery";
AppConst.GET_TEMPLATES_BUILDINGS_QUERY = "GetTemplateBuildingsQuery";
AppConst.SAVE_GAME_DATA_QUERY = "SaveGameDataQuery";
// repositories
AppConst.CITY_REPOSITORY = "CityRepository";
AppConst.RESOURCE_REPOSITORY = "ResourceRepository";
AppConst.TEMPLATE_BUILDING_REPOSITORY = "TemplateBuildingRepository";
// factories
AppConst.BUILDING_FACTORY = "BuildingFactory";
AppConst.CITY_FACTORY = "CityFactory";
AppConst.RESOURCE_FACTORY = "ResourceFactory";
AppConst.QUANTITY_FACTORY = "QuantityFactory";
AppConst.QUANTITY_LIST_FACTORY = "QuantityListFactory";
AppConst.BUILDING_LEVEL_FACTORY = "BuildingLevelFactory";
AppConst.TEMPLATE_BUILDING_FACTORY = "TemplateBuildingFactory";
// services
AppConst.UID_SERVICE = "UIDService";
AppConst.PAYMENT_SERVICE = "PaymentService";
AppConst.SERIALIZER_SERVICE = "SerializerService";
