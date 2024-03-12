import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import AppConst from "../ioc/app.const";
import IRepository from "../model/repository/IRepository";
import TemplateBuilding from "../model/schema/building/TemplateBuilding";
import City from "../model/schema/city/City";
/**
 * Downgrades a building with a specific id (it if exists) by a certain minus
 * Removes building if minus is too strong
 * 
 * example.ts
 * ```typescript
 * const data = {cityID: 1, id:1, minus: 1};
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.DOWNGRADE_BUILDING, data);
 * ```
 */
export default class DowngradeBuildingCommand implements ICommand{

    execute(notification: INotification): boolean {
        const facade:Facade = notification.getEmitter() as Facade;
        const data:any = notification.getPayload() as any; 
        const minus:number = data.minus || 1;
        const tplRepo = facade.getProxy(AppConst.TEMPLATE_BUILDING_REPOSITORY) as IRepository<TemplateBuilding>;
        const cityRepo = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<City>;

        const city = cityRepo.getOneBy('id',data.cityID) || null;
        if( city === null )
            return false; 

        const target = city.buildings.find(b=> b.id === data.id) || null; 
        const tplID = target === null ? -1 : target.tplBuildingID;
        const tpl = tplRepo.getOneBy('id',tplID);

        if( tpl === null || target === null)
            return false;

        const prevLevel = tpl.levels.find( l=>l.level === target.level.level-minus) || null;
        
        if( prevLevel === null ){
            city.buildings.splice( city.buildings.indexOf(target), 1 );
            return true;
        }

        target.level = prevLevel.clone();
        return true;
    }
}