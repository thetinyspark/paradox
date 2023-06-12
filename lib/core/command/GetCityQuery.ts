import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import City from "../model/schema/city/City";
import AppConst from "../ioc/app.const";
import IRepository from "../model/repository/IRepository";
/**
 * Returns a city by its id if exists
 * 
 * example.ts
 * ```typescript
 * Paradox.engine.getFacade().query(Paradox.appConstants.GET_CITY_QUERY, {id:1}).then( (city)=>{});
 * ```
 */
export default class GetCityQuery implements ICommand{

    execute(notification: INotification): City {
        const facade:Facade = notification.getEmitter() as Facade;
        const proxy = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<City>;
        const payload = notification.getPayload();
        return proxy.getOneBy('id', payload.id) as City;
    }
}