import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import TemplateBuilding from "../model/schema/building/TemplateBuilding";
import AppConst from "../ioc/app.const";
import IRepository from "../model/repository/IRepository";
/**
 * Returns all building's templates
 * 
 * example.ts
 * ```typescript
 * Paradox.engine.getFacade().query(Paradox.appConstants.GET_TEMPLATES_BUILDINGS_QUERY).then( (templates)=>{});
 * ```
 */
export default class GetTemplateBuildingsQuery implements ICommand{

    execute(notification: INotification): TemplateBuilding[] {
        const facade:Facade = notification.getEmitter() as Facade;
        const proxy = facade.getProxy(AppConst.TEMPLATE_BUILDING_REPOSITORY) as IRepository<TemplateBuilding>;
        return proxy.getAll();
    }
}