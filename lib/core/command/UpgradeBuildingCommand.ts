import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import AppConst from "../ioc/app.const";
import Repository from "../model/repository/Repository";
import TemplateBuilding from "../model/schema/building/TemplateBuilding";
import City from "../model/schema/city/City";
import PaymentService from "../service/PaymentService";

export default class UpgradeBuildingCommand implements ICommand{

    execute(notification: INotification): void {
        const facade:Facade = notification.getEmitter() as Facade;
        const data:any = notification.getPayload() as any; 
        const tplRepo = facade.getProxy(AppConst.TEMPLATE_BUILDING_REPOSITORY) as Repository<TemplateBuilding>;
        const cityRepo = facade.getProxy(AppConst.CITY_REPOSITORY) as Repository<City>;

        const city = cityRepo.getOneBy('id',data.cityID);
        const target = city.buildings[data.index] || null; 
        const tplID = target === null ? -1 : target.tplBuildingID;
        const tpl = tplRepo.getOneBy('id',tplID);

        if( tpl === null || city === null || target === null)
            return;
            
        if( !city.buildings.includes(target) )
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
        const paymentService = facade.getService(AppConst.PAYMENT_SERVICE) as PaymentService; 
        if( paymentService.pay(wallet, cost) ){
            target.level = nextLevel.clone();
        }
    }
}