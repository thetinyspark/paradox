import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import AppConst from "../ioc/app.const";
import IRepository from "../model/repository/IRepository";
import City from "../model/schema/city/City";
import TemplateBuilding from "../model/schema/building/TemplateBuilding";
import IFactory from "../service/factory/IFactory";
import IPaymentService from "../service/IPaymentService";
/**
 * Buys and adds a building to a city if city has enough resources
 * 
 * example.ts
 * ```typescript
 * const data = {cityID: 1, tplID: 1};
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.BUY_BUILDING, data);
 * ```
 */
export default class BuyBuildingCommand implements ICommand{

    execute(notification: INotification): void {
        const facade:Facade = notification.getEmitter() as Facade;
        const data:any = notification.getPayload() as any; 
        const cityRepo = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<City>;
        const tplRepo = facade.getProxy(AppConst.TEMPLATE_BUILDING_REPOSITORY) as IRepository<TemplateBuilding>;

        const tpl = tplRepo.getOneBy('id',data.tplID);
        const city = cityRepo.getOneBy('id',data.cityID);

        if( tpl === null || city === null )
            return;

        const factory:IFactory = facade.getService(AppConst.BUILDING_FACTORY) as IFactory;
        
        // building is free
        if( tpl.levels.length === 0 || data.freely ){
            city.buildings.push( factory.fromData({tplID: tpl.id}));
            return;
        }
        
        const cost = tpl.levels[0].cost;
        const wallet = city.wallet;
        const paymentService = facade.getService(AppConst.PAYMENT_SERVICE) as IPaymentService; 

        if( paymentService.pay(wallet, cost) ){
            city.buildings.push( factory.fromData({tplID: tpl.id}));
        }
    }
}