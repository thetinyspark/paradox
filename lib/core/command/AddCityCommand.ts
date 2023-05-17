import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import City from "../model/schema/city/City";
import AppConst from "../ioc/app.const";
import Repository from "../model/repository/Repository";
import IFactory from "../service/factory/IFactory";

export default class AddCityCommand implements ICommand{

    execute(notification: INotification): void {
        const facade:Facade = notification.getEmitter() as Facade;
        const data:any = notification.getPayload() as any; 
        const proxy = facade.getProxy(AppConst.CITY_REPOSITORY) as Repository<City>;
        const factory:IFactory = facade.getService(AppConst.CITY_FACTORY) as IFactory;
        proxy.add( factory.fromData(data));
    }
}