import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import Resource from "../model/schema/resources/Resource";
import AppConst from "../ioc/app.const";
import IRepository from "../model/repository/IRepository";
/**
 * Returns all resources
 * 
 * example.ts
 * ```typescript
 * Paradox.engine.getFacade().query(Paradox.appConstants.GET_RESOURCES_QUERY).then( (resources)=>{});
 * ```
 */
export default class GetResourcesQuery implements ICommand{

    execute(notification: INotification): Resource[] {
        const facade:Facade = notification.getEmitter() as Facade;
        const proxy = facade.getProxy(AppConst.RESOURCE_REPOSITORY) as IRepository<Resource>;
        return proxy.getAll();
    }
}