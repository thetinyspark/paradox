import { Facade } from "@thetinyspark/coffe-maker";
import Repository from "../../../lib/core/model/repository/Repository";
import AppConst from "../../../lib/core/ioc/app.const";
import { ATLANTIS, SHANGRILA, YS } from "../../../lib/mock";
import { setup } from "../../setup.spec";

describe('CreateResourcesCommand test suite', 
()=>{
    it('should be able to create a set of cities and retrieve them', 
    ()=>{
        // given 
        const facade:Facade = setup() as Facade;
        const proxy = facade.getProxy(AppConst.CITY_REPOSITORY) as Repository<any>;
        const cities:any[] = [SHANGRILA(), ATLANTIS(), YS()];
        
        // when 
        facade.sendNotification(AppConst.CREATE_CITIES, cities);
        const results =  proxy.getAll();

        // then 
        results.forEach( 
            (current, index)=>{
                expect(current.id).toEqual(cities[index].id);
                expect(current.name).toEqual(cities[index].name);
            }
        );
    });
})