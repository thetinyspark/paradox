import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import City from "../model/schema/city/City";
import Building from "../model/schema/building/Building";
import Quantity from "../model/schema/resources/Quantity";
import AppConst from "../ioc/app.const";
import Repository from "../model/repository/Repository";

export default class DoCycleCommand implements ICommand{

    execute(notification: INotification): void {
        const facade:Facade = notification.getEmitter() as Facade;
        const proxy = facade.getProxy(AppConst.CITY_REPOSITORY) as Repository<City>;

        proxy.getAll().forEach( 
            (city:City)=>{
                city.buildings.forEach( 
                    (building:Building)=>{
                        building.level.prod.get().forEach( 
                            (prod:Quantity)=>{
                                const cityQuantity = city.wallet.get().find(q=>q.resourceID === prod.resourceID ) || null;
                                if( cityQuantity === null ){
                                    city.wallet.set(
                                        [
                                            ...city.wallet.get(), 
                                            prod.clone()
                                        ]
                                    )
                                }
                                else{
                                    cityQuantity.amount += prod.amount
                                }
                            }
                        )
                    }
                )
            }
        )
    }
}