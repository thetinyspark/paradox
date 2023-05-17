import { Facade } from "@thetinyspark/coffe-maker";
import City from "../../../lib/core/model/schema/city/City";
import AppConst from "../../../lib/core/ioc/app.const";
import { ATLANTIS, YS } from "../../../lib/mock";
import { setup } from "../../setup.spec";

describe('GetCitiesQuery test suite', 
()=>{
    it('should be able to get all resources from repository', 
    async ()=>{
        // given 
        const facade:Facade         = setup() as Facade;
        
        // when
        facade.sendNotification(AppConst.ADD_CITY, YS());
        facade.sendNotification(AppConst.ADD_CITY, ATLANTIS());
        const results:City[] = await facade.query(AppConst.GET_CITIES_QUERY) as City[];

        // then 
        expect(results[0].id).toEqual(YS().id);
        expect(results[0].name).toEqual(YS().name);

        expect(results[1].id).toEqual(ATLANTIS().id);
        expect(results[1].name).toEqual(ATLANTIS().name);
    }); 
})