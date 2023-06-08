import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import Resource from "../model/schema/resources/Resource";
import AppConst from "../ioc/app.const";
import Repository from "../model/repository/Repository";
import IFactory from "../service/factory/IFactory";
/**
 * Create resources
 * 
 * example.ts
 * ```typescript
 * const resources = [{id:1, name: "gold"},{id:2, name: "wood"},{id:3, name: "food"}];
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.CREATE_RESOURCES, resources);
 * ```
 */
export default class CreateResourcesCommand implements ICommand{

    execute(notification: INotification): void {
        const facade:Facade = notification.getEmitter() as Facade;
        const list:any[] = notification.getPayload() as any[]; 
        const proxy = facade.getProxy(AppConst.RESOURCE_REPOSITORY) as Repository<Resource>;
        const factory:IFactory = facade.getService(AppConst.RESOURCE_FACTORY) as IFactory;
        list.forEach( 
            (current)=>{
                proxy.add(factory.fromData(current));
            }
        );
    }
}