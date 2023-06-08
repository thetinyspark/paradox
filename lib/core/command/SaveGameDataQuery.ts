import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import AppConst from "../ioc/app.const";
import Repository from "../model/repository/Repository";
import TemplateBuilding from "../model/schema/building/TemplateBuilding";
import City from "../model/schema/city/City";
import Resource from "../model/schema/resources/Resource";
import SerializerService from "../service/SerializerService";
/**
 * Saves and returns all game data
 * 
 * example.ts
 * ```typescript
 * Paradox.engine.getFacade().query(Paradox.appConstants.SAVE_GAME_DATA_QUERY).then( (gameData)=>{});
 * ```
 */
export default class SaveGameDataQuery implements ICommand{

    execute(notification: INotification): string {
        const facade:Facade = notification.getEmitter() as Facade;
        const data:any = notification.getPayload() as any; 
        const tplRepo = facade.getProxy(AppConst.TEMPLATE_BUILDING_REPOSITORY) as Repository<TemplateBuilding>;
        const citRepo = facade.getProxy(AppConst.CITY_REPOSITORY) as Repository<City>;
        const resRepo = facade.getProxy(AppConst.RESOURCE_REPOSITORY) as Repository<Resource>;
        const service = facade.getService(AppConst.SERIALIZER_SERVICE) as SerializerService;

        return service.serialize(
            citRepo.getAll(), 
            tplRepo.getAll(), 
            resRepo.getAll(), 
            data.format
        );
    }
}