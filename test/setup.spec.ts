import { Container, Facade } from "@thetinyspark/coffe-maker";
import { configFacade, configIOC } from "../lib/core/ioc/config";
import AppConst from "../lib/core/ioc/app.const";
import { RESOURCES_MOCK, TEMPLATE_BUILDINGS_MOCK } from "./mock.spec";
import IUIDService from "../lib/core/service/IUIDService";
import Engine from "../lib/core/Engine";
import IRepository from "../lib/core/model/repository/IRepository";
import City from "../lib/core/model/schema/city/City";
import TemplateBuilding from "../lib/core/model/schema/building/TemplateBuilding";
import Resource from "../lib/core/model/schema/resources/Resource";

export function setup(
    container = new Container(), 
    withResources:boolean = true,
    withTemplates:boolean = true
){
    configIOC(container);
    const facade = configFacade(container) as Facade; 

    if( withResources )
        facade.sendNotification(AppConst.CREATE_RESOURCES, RESOURCES_MOCK);

    if( withTemplates)
        facade.sendNotification(AppConst.CREATE_TEMPLATE_BUILDINGS, TEMPLATE_BUILDINGS_MOCK);

    const uidService:IUIDService = facade.getService(AppConst.UID_SERVICE) as IUIDService;
    uidService.reset();
    return facade;
}

export function setupEngine(
    container = new Container()
){
    const engine:Engine = new Engine();
    configIOC(container);

    const uidService:IUIDService = container.resolve(AppConst.UID_SERVICE) as IUIDService;
    const cities = container.resolve(AppConst.CITY_REPOSITORY) as IRepository<City>;
    const templates = container.resolve(AppConst.TEMPLATE_BUILDING_REPOSITORY) as IRepository<TemplateBuilding>;
    const resources = container.resolve(AppConst.RESOURCE_REPOSITORY) as IRepository<Resource>;

    uidService.reset();
    cities.reset();
    templates.reset();
    resources.reset();

    engine.init(container, {});
    engine.reset();
    return engine;
}