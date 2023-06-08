import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import City from "../model/schema/city/City";
import AppConst from "../ioc/app.const";
import Repository from "../model/repository/Repository";
/**
 * Returns all the cities
 * 
 * example.ts
 * ```typescript
 * Paradox.engine.getFacade().query(Paradox.appConstants.GET_CITIES_QUERY).then( (cities)=>{});
 * ```
 */
export default class GetCitiesQuery implements ICommand{

    execute(notification: INotification): City[] {
        const facade:Facade = notification.getEmitter() as Facade;
        const proxy = facade.getProxy(AppConst.CITY_REPOSITORY) as Repository<City>;
        return proxy.getAll();
    }
}