import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import AppConst from "../ioc/app.const";
import IRepository from "../model/repository/IRepository";
import TemplateBuilding from "../model/schema/building/TemplateBuilding";
import City from "../model/schema/city/City";
import IPaymentService from "../service/IPaymentService";
/**
 * Upgrades a building with a specific id (it if exists)
 * 
 * example.ts
 * ```typescript
 * const data = {cityID: 1, id:1};
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.UPGRADE_BUILDING, data);
 * ```
 */
export default class UpgradeBuildingCommand implements ICommand{

    execute(notification: INotification): void {
        const facade:Facade = notification.getEmitter() as Facade;
        const data:any = notification.getPayload() as any; 
        const tplRepo = facade.getProxy(AppConst.TEMPLATE_BUILDING_REPOSITORY) as IRepository<TemplateBuilding>;
        const cityRepo = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<City>;

        const city = cityRepo.getOneBy('id',data.cityID) || null;
        if( city === null )
            return; 

        const target = city.buildings.find(b=> b.id === data.id) || null; 
        const tplID = target === null ? -1 : target.tplBuildingID;
        const tpl = tplRepo.getOneBy('id',tplID);

        if( tpl === null || target === null)
            return;

        const nextLevel = tpl.levels.find( l=>l.level === target.level.level+1) || null;
        
        if( nextLevel === null )
            return 

        if( data.freely === true ){
            target.level = nextLevel.clone();
            return;
        }

        const cost = nextLevel.cost;
        const wallet = city.wallet;
        const IPaymentService = facade.getService(AppConst.PAYMENT_SERVICE) as IPaymentService; 
        if( IPaymentService.pay(wallet, cost) ){
            target.level = nextLevel.clone();
        }
    }
}