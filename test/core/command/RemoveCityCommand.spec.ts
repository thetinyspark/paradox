import { Facade } from "@thetinyspark/coffe-maker";
import IRepository from "../../../lib/core/model/repository/IRepository";
import AppConst from "../../../lib/core/ioc/app.const";
import { ATLANTIS, YS } from "../../../lib/mock";
import { setup } from "../../setup.spec";

describe('RemoveCityCommand test suite', 
()=>{
    it('should be able to add a city', 
    ()=>{
        // given 
        const facade:Facade   = setup() as Facade;
        const proxy           = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<any>;
        
        // when 
        facade.sendNotification(AppConst.ADD_CITY, YS());
        facade.sendNotification(AppConst.ADD_CITY, ATLANTIS());
        facade.sendNotification(AppConst.REMOVE_CITY, {id:proxy.getAll()[0].id });
        const results = proxy.getAll();

        // then 
        expect(results.length).toEqual(1);
        expect(results[0].id).toEqual(ATLANTIS().id);
        expect(results[0].name).toEqual(ATLANTIS().name);
    });
})