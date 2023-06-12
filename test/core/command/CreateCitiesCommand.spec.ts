import { Facade } from "@thetinyspark/coffe-maker";
import IRepository from "../../../lib/core/model/repository/IRepository";
import AppConst from "../../../lib/core/ioc/app.const";
import { ATLANTIS, SHANGRILA, YS } from "../../mock.spec";
import { setup } from "../../setup.spec";

describe('CreateCitiesCommand test suite', 
()=>{
    it('should be able to create a set of cities and retrieve them', 
    ()=>{
        // given 
        const facade:Facade = setup() as Facade;
        const proxy = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<any>;
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