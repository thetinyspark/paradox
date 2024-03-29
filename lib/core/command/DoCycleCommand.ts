import { Facade, ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import City from "../model/schema/city/City";
import Building from "../model/schema/building/Building";
import Quantity from "../model/schema/resources/Quantity";
import AppConst from "../ioc/app.const";
import IRepository from "../model/repository/IRepository";
import IPaymentService from "../service/IPaymentService";
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
        const proxy = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<City>;

        proxy.getAll().forEach( 
            (city:City)=>{

                
                // every building
                city.buildings.forEach( 
                    (building:Building)=>{
                        if( building.level === null || building.frozen)
                            return; 

                        building.level.cycleCounter++;
                        if( building.level.cycleCounter % building.level.prodFrequency !== 0)
                            return;

                        // are productions resources maxed ? 
                        const notEmpty = building.level.prod.get().length > 0;
                        const fulled = building.level.prod.get().map( 
                            (q)=>{
                                const walletQ = city.wallet.get().find( b=>b.resourceID == q.resourceID) || null;
                                if( walletQ == null){
                                    return false;
                                }
                                else{
                                    return walletQ.isFull();
                                }

                            }
                        ).reduce( (previous, current)=>{return previous && current;}, notEmpty);
                        
                        // if production is fulled, then skip this building production/consumption mechanism
                        if(fulled){
                            return;
                        }
                        
                        const virtualWallet = city.wallet.clone();
                        // production
                        building.level.prod.get().forEach( 
                            (prod:Quantity)=>{

                                const wallet = virtualWallet.get();
                                let pos = wallet.findIndex(q=>q.resourceID === prod.resourceID );

                                if( pos < 0 ){
                                    wallet.push( new Quantity(prod.resourceID, 0));
                                    pos = wallet.length -1;
                                }
                                    
                                const cityQuantity = wallet[pos];
                                cityQuantity.amount += prod.amount;
                            }
                        );

                        // maintenance
                        building.level.cons.get().forEach( 
                            (cons:Quantity)=>{
                                const wallet = virtualWallet.get();
                                let pos = wallet.findIndex(q=>q.resourceID === cons.resourceID );
    
                                if( pos < 0 ){
                                    wallet.push( new Quantity(cons.resourceID, 0));
                                    pos = wallet.length -1;
                                }
                                    
                                const cityQuantity = wallet[pos];
                                cityQuantity.amount -= cons.amount;
                            }
                        );

                        // if wallet is not in debt then clone it to city wallet; 
                        const isInDebt:boolean = virtualWallet.get().filter((q)=>q.amount < 0).length > 0;

                        if( !isInDebt ){
                            city.wallet = virtualWallet.clone();
                        }
                    }
                );

              
            }
        )
    }
}