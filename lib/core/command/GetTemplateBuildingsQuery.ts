import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import TemplateBuilding from "../model/schema/building/TemplateBuilding";
import AppConst from "../ioc/app.const";
import Repository from "../model/repository/Repository";

export default class GetTemplateBuildingsQuery implements ICommand{

    execute(notification: INotification): TemplateBuilding[] {
        const facade:Facade = notification.getEmitter() as Facade;
        const proxy = facade.getProxy(AppConst.TEMPLATE_BUILDING_REPOSITORY) as Repository<TemplateBuilding>;
        return proxy.getAll();
    }
}