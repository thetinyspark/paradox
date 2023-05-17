import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import AppConst from "../ioc/app.const";
import Repository from "../model/repository/Repository";
import IFactory from "../service/factory/IFactory";
import City from "../model/schema/city/City";

export default class CreateCitiesCommand implements ICommand{

    execute(notification: INotification): void {
        const facade:Facade = notification.getEmitter() as Facade;
        const list:any[] = notification.getPayload() as any[]; 
        const proxy = facade.getProxy(AppConst.CITY_REPOSITORY) as Repository<City>;
        const factory:IFactory = facade.getService(AppConst.CITY_FACTORY) as IFactory;
        list.forEach( 
            (current)=>{
                proxy.add(factory.fromData(current));
            }
        );
    }
}