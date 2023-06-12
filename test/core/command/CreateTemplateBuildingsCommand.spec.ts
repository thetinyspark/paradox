import { Container, Facade } from "@thetinyspark/coffe-maker";
import IRepository from "../../../lib/core/model/repository/IRepository";
import AppConst from "../../../lib/core/ioc/app.const";
import { TEMPLATE_BUILDINGS_MOCK } from "../../../lib/mock";
import { setup } from "../../setup.spec";

describe('CreateTemplateBuildingsCommand test suite', 
()=>{
    it('should be able to create a set of buildings and retrieve them', 
    ()=>{
        // given 
        const facade:Facade = setup( new Container(), true, false) as Facade;
        const proxy = facade.getProxy(AppConst.TEMPLATE_BUILDING_REPOSITORY) as IRepository<any>;
        const buildings:any[] = TEMPLATE_BUILDINGS_MOCK;
        
        // when 
        facade.sendNotification(AppConst.CREATE_TEMPLATE_BUILDINGS, buildings);
        const results =  proxy.getAll();

        // then 
        results.forEach( 
            (current, index)=>{
                expect(current.id).toEqual(buildings[index].id);
                expect(current.name).toEqual(buildings[index].name);
                current.levels.forEach( 
                    (level, index2)=>{

                        level.cost.get().forEach( 
                            (quantity, index3)=>{
                                const q2 = buildings[index].levels[index2].cost[index3];
                                expect(quantity.amount).toEqual(q2.amount);
                                expect(quantity.resourceID).toEqual(q2.resourceID);
                            }
                        );

                        level.prod.get().forEach( 
                            (quantity, index4)=>{
                                const q2 = buildings[index].levels[index2].prod[index4];
                                expect(quantity.amount).toEqual(q2.amount);
                                expect(quantity.resourceID).toEqual(q2.resourceID);
                            }
                        );
                    }
                )
            }
        );
    }); 
})