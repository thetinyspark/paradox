import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import City from "../model/schema/city/City";
import Building from "../model/schema/building/Building";
import Quantity from "../model/schema/resources/Quantity";
import AppConst from "../ioc/app.const";
import Repository from "../model/repository/Repository";
/**
 * Processes a cycle. A cycle means that productions are added 
 * to cities's wallets and consumptions are removed from them too. 
 * 
 * example.ts
 * ```typescript
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.DO_CYCLE);
 * ```
 */
export default class DoCycleCommand implements ICommand{

    execute(notification: INotification): void {
        const facade:Facade = notification.getEmitter() as Facade;
        const proxy = facade.getProxy(AppConst.CITY_REPOSITORY) as Repository<City>;

        proxy.getAll().forEach( 
            (city:City)=>{

                // production
                city.buildings.forEach( 
                    (building:Building)=>{
                        if( building.level === null )
                            return; 
                            
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
                                    cityQuantity.amount += prod.amount;
                                }
                            }
                        );
                    }
                );

                // maintenance
                city.buildings.forEach( 
                    (building:Building)=>{
                        if( building.level === null )
                            return; 
                            
                        building.level.cons.get().forEach( 
                            (cons:Quantity)=>{
                                const cityQuantity = city.wallet.get().find(q=>q.resourceID === cons.resourceID ) || null;
                                if( cityQuantity === null ){
                                    const empty = cons.clone();
                                    empty.amount = 0;
                                    city.wallet.set([...city.wallet.get(), empty]);
                                }
                                
                                cityQuantity.amount -= cons.amount;
                            }
                        );
                    }
                );
            }
        )
    }
}