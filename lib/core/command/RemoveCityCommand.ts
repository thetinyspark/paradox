import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import City from "../model/schema/city/City";
import AppConst from "../ioc/app.const";
import IRepository from "../model/repository/IRepository";
import IFactory from "../service/factory/IFactory";

/**
 * Removes city
 * 
 * example.ts
 * ```typescript
 * const data = {id:1};
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.REMOVE_CITY, data)
 * ```
 */
export default class RemoveCityCommand implements ICommand{

    execute(notification: INotification): void {
        const facade:Facade = notification.getEmitter() as Facade;
        const data:any = notification.getPayload() as any; 
        const proxy = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<City>;
        const factory:IFactory = facade.getService(AppConst.CITY_FACTORY) as IFactory;
        proxy.remove(proxy.getOneBy('id', data.id));
    }
}