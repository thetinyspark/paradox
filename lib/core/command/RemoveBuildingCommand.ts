import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import AppConst from "../ioc/app.const";
import IRepository from "../model/repository/IRepository";
import City from "../model/schema/city/City";
/**
 * Removes a building with a specific id from a city (it if exists)
 * 
 * example.ts
 * ```typescript
 * const data = {cityID: 1, id:1};
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.REMOVE_BUILDING_FROM_CITY, data);
 * ```
 */
export default class RemoveBuildingCommand implements ICommand{

    execute(notification: INotification): boolean {
        const facade:Facade = notification.getEmitter() as Facade;
        const data:any = notification.getPayload() as any; 
        const cityRepo = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<City>;

        const city = cityRepo.getOneBy('id',data.cityID);
        if( city === null )
            return false; 
            
        const target = city.buildings.find(b=> b.id === data.id) || null;
    
        if( !city.buildings.includes(target) )
            return false; 

        const pos = city.buildings.indexOf(target);
        city.buildings.splice(pos,1);
        return pos > -1;
    }
}