import { Facade } from "@thetinyspark/coffe-maker";
import TemplateBuilding from "../../../lib/core/model/schema/building/TemplateBuilding";
import AppConst from "../../../lib/core/ioc/app.const";
import { TEMPLATE_BUILDINGS_MOCK } from "../../mock.spec";
import { setup } from "../../setup.spec";

describe('GetTemplateBuildingsQuery test suite', 
()=>{
    it('should be able to get all resources from repository', 
    async ()=>{
        // given 
        const facade:Facade = setup() as Facade;
        const buildings:any[] = TEMPLATE_BUILDINGS_MOCK;
        
        // when 
        const results:TemplateBuilding[] = await facade.query(AppConst.GET_TEMPLATES_BUILDINGS_QUERY) as TemplateBuilding[];

        // then 
        expect(results.length).toEqual(buildings.length);
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