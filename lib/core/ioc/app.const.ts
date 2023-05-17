export default class AppConst{
    // facade
    static APP_FACADE:string                    = "AppFacade";

    // model
    static GAME_STORE_MODEL:string              = "GameStoreModel"

    // commands
    static ADD_BUILDING_TO_CITY:string          = "AddBuildingToCityCommand";
    static UPGRADE_BUILDING:string              = "UpgradeBuildingCommand";
    static ADD_CITY:string                      = "AddCityCommand";
    static BUY_BUILDING:string                  = "BuyBuildingCommand";
    static CREATE_RESOURCES:string              = "CreateResourcesCommand";
    static CREATE_CITIES:string                 = "CreateCitiesCommand";
    static CREATE_TEMPLATE_BUILDINGS:string     = "CreateTemplateBuildingsCommand";
    static RESTORE_SAVED_DATA:string            = "RestoreSavedDataCommand";
    static DO_CYCLE:string                      = "DoCycleCommand";

    // queries
    static GET_CITIES_QUERY:string              = "GetCitiesQuery";
    static GET_RESOURCES_QUERY:string           = "GetResourcesQuery";
    static GET_TEMPLATES_BUILDINGS_QUERY:string = "GetTemplateBuildingsQuery";
    static SAVE_GAME_DATA_QUERY:string          = "SaveGameDataQuery";

    // repositories
    static CITY_REPOSITORY:string               = "CityRepository";
    static RESOURCE_REPOSITORY:string           = "ResourceRepository";
    static TEMPLATE_BUILDING_REPOSITORY:string  = "TemplateBuildingRepository";
    static BASE_REPOSITORY:string               = "BaseRepository";

    // factories
    static BUILDING_FACTORY:string              = "BuildingFactory";
    static CITY_FACTORY:string                  = "CityFactory";
    static RESOURCE_FACTORY:string              = "ResourceFactory";
    static QUANTITY_FACTORY:string              = "QuantityFactory";
    static QUANTITY_LIST_FACTORY:string         = "QuantityListFactory";
    static BUILDING_LEVEL_FACTORY:string        = "BuildingLevelFactory";
    static TEMPLATE_BUILDING_FACTORY:string     = "TemplateBuildingFactory";
    
    // services
    static PAYMENT_SERVICE:string               = "PaymentService";
    static SERIALIZER_SERVICE:string            = "SerializerService";
}