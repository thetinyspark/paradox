import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import AppConst from "../ioc/app.const";
import Repository from "../model/repository/Repository";
import TemplateBuilding from "../model/schema/building/TemplateBuilding";
import City from "../model/schema/city/City";
import IFactory from "../service/factory/IFactory";

/**
 * Adds a building to a city
 * 
 * example.ts
 * ```typescript
 * const data = {cityID: 1, tplID: 1};
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.ADD_BUILDING_TO_CITY, data);
 * ```
 */
export default class AddBuildingToCityCommand implements ICommand{
    execute(notification: INotification): void {
        const facade:Facade = notification.getEmitter() as Facade;
        const data:any = notification.getPayload() as any; 
        const tplRepo = facade.getProxy(AppConst.TEMPLATE_BUILDING_REPOSITORY) as Repository<TemplateBuilding>;
        const cityRepo = facade.getProxy(AppConst.CITY_REPOSITORY) as Repository<City>;

        const tpl = tplRepo.getOneBy('id',data.tplID);
        const city = cityRepo.getOneBy('id',data.cityID);

        if( tpl === null || city === null )
            return;

        const factory:IFactory = facade.getService(AppConst.BUILDING_FACTORY) as IFactory;
        const id = city.buildings.length;
        city.buildings.push( factory.fromData({tplID: tpl.id, id}));
    }
}