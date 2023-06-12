import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import AppConst from "../ioc/app.const";
import IRepository from "../model/repository/IRepository";
import TemplateBuilding from "../model/schema/building/TemplateBuilding";
import IFactory from "../service/factory/IFactory";
/**
 * Create building's templates
 * 
 * example.ts
 * ```typescript
 * const templates = [
    {
        id: 1, 
        name: "Castle", 
        levels: [
            {level: 1, cost: [{resourceID: 1, amount: 100}], prod: [{resourceID: 2, amount: 100}], cons:[{resourceID: 2, amount: 2}], sold:[{resourceID: 1, amount: 50}]},
            {level: 2, cost: [{resourceID: 1, amount: 200}], prod: [{resourceID: 2, amount: 200}], cons:[], sold:[]},
        ]
    },
    {
        id: 2, 
        name: "Home", 
        levels: []
    },
];
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.CREATE_TEMPLATE_BUILDINGS, templates);
 * ```
 */
export default class CreateTemplateBuildingsCommand implements ICommand{

    execute(notification: INotification): void {
        const facade:Facade = notification.getEmitter() as Facade;
        const list:any[] = notification.getPayload() as any[]; 
        const templateProxy = facade.getProxy(AppConst.TEMPLATE_BUILDING_REPOSITORY) as IRepository<TemplateBuilding>;
        const factory:IFactory = facade.getService(AppConst.TEMPLATE_BUILDING_FACTORY) as IFactory;

        list.forEach( 
            (current)=>{
                templateProxy.add(factory.fromData(current));
            }
        );
    }
}