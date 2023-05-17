import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import AppConst from "../ioc/app.const";

export default class RestoreSavedDataCommand implements ICommand{

    execute(notification: INotification): void {
        const facade:Facade = notification.getEmitter() as Facade;
        const configuration:any = notification.getPayload() as any; 

        facade.sendNotification(AppConst.CREATE_RESOURCES, configuration.resources);
        facade.sendNotification(AppConst.CREATE_TEMPLATE_BUILDINGS, configuration.templateBuildings);
        facade.sendNotification(AppConst.CREATE_CITIES, configuration.cities);
    }
}