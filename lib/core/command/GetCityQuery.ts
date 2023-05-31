import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import City from "../model/schema/city/City";
import AppConst from "../ioc/app.const";
import Repository from "../model/repository/Repository";

export default class GetCityQuery implements ICommand{

    execute(notification: INotification): City {
        const facade:Facade = notification.getEmitter() as Facade;
        const proxy = facade.getProxy(AppConst.CITY_REPOSITORY) as Repository<City>;
        const payload = notification.getPayload();
        return proxy.getOneBy('id', payload.id) as City;
    }
}