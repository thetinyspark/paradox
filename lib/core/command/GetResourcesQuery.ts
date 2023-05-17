import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import Resource from "../model/schema/resources/Resource";
import AppConst from "../ioc/app.const";
import Repository from "../model/repository/Repository";

export default class GetResourcesQuery implements ICommand{

    execute(notification: INotification): Resource[] {
        const facade:Facade = notification.getEmitter() as Facade;
        const proxy = facade.getProxy(AppConst.RESOURCE_REPOSITORY) as Repository<Resource>;
        return proxy.getAll();
    }
}