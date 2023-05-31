import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import AppConst from "../ioc/app.const";
import Repository from "../model/repository/Repository";
import City from "../model/schema/city/City";

export default class RemoveBuildingCommand implements ICommand{

    execute(notification: INotification): void {
        const facade:Facade = notification.getEmitter() as Facade;
        const data:any = notification.getPayload() as any; 
        const cityRepo = facade.getProxy(AppConst.CITY_REPOSITORY) as Repository<City>;

        const city = cityRepo.getOneBy('id',data.cityID);
        const target = city.buildings.find(b=> b.id === data.id) || null;
    
        if( !city.buildings.includes(target) )
            return; 

        const pos = city.buildings.indexOf(target);
        city.buildings.splice(pos,1);
        city.buildings.forEach( 
            (building, index)=>{
                building.id = index;
            }
        );
    }
}