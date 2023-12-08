import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import AppConst from "../ioc/app.const";
import IRepository from "../model/repository/IRepository";
import City from "../model/schema/city/City";
import Quantity from "../model/schema/resources/Quantity";
/**
 * Sells a building with a specific id and remove it from a city (it if exists)
 * 
 * example.ts
 * ```typescript
 * const data = {cityID:1, id:1};
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.SELL_BUILDING, data);
 * ```
 */
export default class SellBuildingCommand implements ICommand{

    async execute(notification: INotification): Promise<boolean> {
        const facade:Facade = notification.getEmitter() as Facade;
        const data:any = notification.getPayload() as any; 
        const cityRepo = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<City>;
        const city = cityRepo.getOneBy('id',data.cityID);
        if( city === null )
            return false; 
            
        const target = city.buildings.find(b=> b.id === data.id) || null;
    
        if( target === null )
            return false;

        target.level.sold.get().forEach(
            (quantity)=>{
                const wallet = city.wallet.get();
                const eq = wallet.find( q=>q.resourceID === quantity.resourceID ) || new Quantity(quantity.resourceID, 0);
                wallet.splice( wallet.findIndex(q=>q.resourceID === quantity.resourceID, 1))
                eq.amount += quantity.amount;
                // eq.add(quantity.amount);
                wallet.push(eq);
                city.wallet.set(wallet);
            }
        );
        await facade.query(AppConst.REMOVE_BUILDING_FROM_CITY, data);
        return true;
    }
}