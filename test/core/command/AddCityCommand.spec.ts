import { Facade } from "@thetinyspark/coffe-maker";
import IRepository from "../../../lib/core/model/repository/IRepository";
import AppConst from "../../../lib/core/ioc/app.const";
import { ATLANTIS, YS } from "../../mock.spec";
import { setup } from "../../setup.spec";
import City from "../../../lib/core/model/schema/city/City";

describe('AddCityCommand test suite', 
()=>{
    it('should be able to add a city', 
    ()=>{
        // given 
        const facade:Facade   = setup() as Facade;
        const proxy           = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<any>;
        
        // when 
        facade.sendNotification(AppConst.ADD_CITY, YS());
        facade.sendNotification(AppConst.ADD_CITY, ATLANTIS());
        const results =  proxy.getAll();

        // then 
        expect(results[0].id).toEqual(YS().id);
        expect(results[0].name).toEqual(YS().name);

        expect(results[1].id).toEqual(ATLANTIS().id);
        expect(results[1].name).toEqual(ATLANTIS().name);
    });

    it('should be able to return the last added city', 
    async ()=>{
        // given 
        const facade:Facade   = setup() as Facade;
        
        // when 
        const addedCity:City = await facade.query(AppConst.ADD_CITY, YS());

        // then 
        expect(addedCity.id).toEqual(YS().id);
    });
})