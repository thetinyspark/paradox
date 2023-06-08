import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import AppConst from "../ioc/app.const";
import Repository from "../model/repository/Repository";
import City from "../model/schema/city/City";
import TemplateBuilding from "../model/schema/building/TemplateBuilding";
import IFactory from "../service/factory/IFactory";
import PaymentService from "../service/PaymentService";
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
        const cityRepo = facade.getProxy(AppConst.CITY_REPOSITORY) as Repository<City>;
        const tplRepo = facade.getProxy(AppConst.TEMPLATE_BUILDING_REPOSITORY) as Repository<TemplateBuilding>;

        const tpl = tplRepo.getOneBy('id',data.tplID);
        const city = cityRepo.getOneBy('id',data.cityID);

        if( tpl === null || city === null )
            return;

        const factory:IFactory = facade.getService(AppConst.BUILDING_FACTORY) as IFactory;
        
        // building is free
        if( tpl.levels.length === 0 || data.freely ){
            const id = city.buildings.length;
            city.buildings.push( factory.fromData({tplID: tpl.id, id}));
            return;
        }
        
        const cost = tpl.levels[0].cost;
        const wallet = city.wallet;
        const paymentService = facade.getService(AppConst.PAYMENT_SERVICE) as PaymentService; 

        if( paymentService.pay(wallet, cost) ){
            const id = city.buildings.length;
            city.buildings.push( factory.fromData({tplID: tpl.id, id}));
        }
    }
}