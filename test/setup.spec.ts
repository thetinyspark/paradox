import { Container, Facade } from "@thetinyspark/coffe-maker";
import { configFacade, configIOC } from "../lib/core/ioc/config";
import AppConst from "../lib/core/ioc/app.const";
import { RESOURCES_MOCK, TEMPLATE_BUILDINGS_MOCK } from "../lib/mock";
import IUIDService from "../lib/core/service/IUIDService";

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