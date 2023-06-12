import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import AppConst from "../ioc/app.const";
/**
 * Restores game data
 * 
 * example.ts
 * ```typescript
 * const cities             = [... cities data];
 * const resources          = [... resources data];
 * const templateBuildings  = [... templates data];
 * const data =  {cities resources, templateBuildings};
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.RESTORE_SAVED_DATA, data);
 * ```
 */
export default class RestoreSavedDataCommand implements ICommand{

    execute(notification: INotification): void {
        const facade:Facade = notification.getEmitter() as Facade;
        const configuration:any = notification.getPayload() as any; 

        facade.sendNotification(AppConst.CREATE_RESOURCES, configuration.resources || []);
        facade.sendNotification(AppConst.CREATE_TEMPLATE_BUILDINGS, configuration.templateBuildings || []);
        facade.sendNotification(AppConst.CREATE_CITIES, configuration.cities || []);
    }
}