import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import AppConst from "../ioc/app.const";
import IRepository from "../model/repository/IRepository";
import IFactory from "../service/factory/IFactory";
import City from "../model/schema/city/City";
/**
 * Create cities
 * 
 * example.ts
 * ```typescript
 * const city1 = {id: 1, name: "city1", buildings:[{tplID:1, level:1}],wallet: [{resourceID: 1, amount: 100}]};
 * const city2 = {id: 2, name: "city2", buildings:[{tplID:2, level:1}],wallet: [{resourceID: 2, amount: 100}]};
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.CREATE_CITIES, [city1, city2]);
 * ```
 */
export default class CreateCitiesCommand implements ICommand{
    execute(notification: INotification): void {
        const facade:Facade = notification.getEmitter() as Facade;
        const list:any[] = notification.getPayload() as any[]; 
        const proxy = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<City>;
        const factory:IFactory = facade.getService(AppConst.CITY_FACTORY) as IFactory;
        list.forEach( 
            (current)=>{
                proxy.add(factory.fromData(current));
            }
        );
    }
}