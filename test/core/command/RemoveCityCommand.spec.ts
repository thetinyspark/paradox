import { Facade } from "@thetinyspark/coffe-maker";
import IRepository from "../../../lib/core/model/repository/IRepository";
import AppConst from "../../../lib/core/ioc/app.const";
<<<<<<< HEAD
import { ATLANTIS, YS } from "../../mock.spec";
import { setup } from "../../setup.spec";
import City from "../../../lib/core/model/schema/city/City";
=======
import { ATLANTIS, YS } from "../../../lib/mock";
import { setup } from "../../setup.spec";
>>>>>>> 643f793ad5d27453bf5b2f99c8a267e7c874425f

describe('RemoveCityCommand test suite', 
()=>{
    it('should be able to add a city', 
    ()=>{
        // given 
        const facade:Facade   = setup() as Facade;
<<<<<<< HEAD
        const proxy           = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<City>;
=======
        const proxy           = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<any>;
>>>>>>> 643f793ad5d27453bf5b2f99c8a267e7c874425f
        
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