import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import AppConst from "../ioc/app.const";
import Repository from "../model/repository/Repository";
import City from "../model/schema/city/City";
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

    execute(notification: INotification): void {
        const facade:Facade = notification.getEmitter() as Facade;
        const data:any = notification.getPayload() as any; 
        const cityRepo = facade.getProxy(AppConst.CITY_REPOSITORY) as Repository<City>;

        const city = cityRepo.getOneBy('id',data.cityID);
        const target = city.buildings.find(b=> b.id === data.id) || null;
    
        if( !city.buildings.includes(target) )
            return; 

            
        target.level.sold.get().forEach(
            (quantity)=>{
                const wallet = city.wallet.get();
                const eq = wallet.find( q=>q.resourceID === quantity.resourceID );
                if( !eq)
                    wallet.push(quantity.clone());
                else
                    eq.amount += quantity.amount;

                city.wallet.set(wallet);
            }
        );
        
        facade.sendNotification(AppConst.REMOVE_BUILDING_FROM_CITY, data);
    }
}