import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import City from "../model/schema/city/City";
import AppConst from "../ioc/app.const";
import IRepository from "../model/repository/IRepository";
import IFactory from "../service/factory/IFactory";

/**
 * Adds city
 * 
 * example.ts
 * ```typescript
 * const cityData = {
        id: 1, 
        name: "Atlantis", 
        buildings:[{tplID:1, level:2}],
        wallet: [{resourceID: 1, amount: 100}]
    };
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.ADD_CITY, cityData)
 * ```
 */
export default class AddCityCommand implements ICommand{

    execute(notification: INotification): City {
        const facade:Facade = notification.getEmitter() as Facade;
        const data:any = notification.getPayload() as any; 
        const proxy = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<City>;
        const factory:IFactory = facade.getService(AppConst.CITY_FACTORY) as IFactory;
        const city:City = factory.fromData(data) as City;
        proxy.add(city);
        return city;
    }
}