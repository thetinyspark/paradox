import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import AppConst from "../ioc/app.const";
import Repository from "../model/repository/Repository";
import TemplateBuilding from "../model/schema/building/TemplateBuilding";
import IFactory from "../service/factory/IFactory";

export default class CreateTemplateBuildingsCommand implements ICommand{

    execute(notification: INotification): void {
        const facade:Facade = notification.getEmitter() as Facade;
        const list:any[] = notification.getPayload() as any[]; 
        const templateProxy = facade.getProxy(AppConst.TEMPLATE_BUILDING_REPOSITORY) as Repository<TemplateBuilding>;
        const factory:IFactory = facade.getService(AppConst.TEMPLATE_BUILDING_FACTORY) as IFactory;

        list.forEach( 
            (current)=>{
                templateProxy.add(factory.fromData(current));
            }
        );
    }
}