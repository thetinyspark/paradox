import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import City from "../model/schema/city/City";
import AppConst from "../ioc/app.const";
import IRepository from "../model/repository/IRepository";
/**
 * Sets a building frozen status 
 * If a building is frozen it doesnot produce nor consume anything
 * 
 * example.ts
 * ```typescript
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.SET_BUILDING_FROZEN_STATUS, {id:1, cityID:1, frozen:true});
 * ```
 */
export default class SetBuildingFrozenStatusCommand implements ICommand{

    execute(notification: INotification): void {
        const facade:Facade = notification.getEmitter() as Facade;
        const data:any = notification.getPayload() as any; 
        const cityRepo = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<City>;

        const city = cityRepo.getOneBy('id',data.cityID) || null;
        if( city === null )
            return; 

        const target = city.buildings.find(b=> b.id === data.id) || null; 

        if( target === null)
            return;

        target.frozen = data.frozen === true;
    }
}