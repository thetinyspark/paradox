import { Facade } from "@thetinyspark/coffe-maker";
import City from "../../../lib/core/model/schema/city/City";
import AppConst from "../../../lib/core/ioc/app.const";
import { ATLANTIS, YS } from "../../../lib/mock";
import { setup } from "../../setup.spec";

describe('GetCityQuery test suite', 
()=>{
    it('should be able to get a specific city from repository', 
    async ()=>{
        // given 
        const facade:Facade         = setup() as Facade;
        
        // when
        facade.sendNotification(AppConst.ADD_CITY, YS());
        facade.sendNotification(AppConst.ADD_CITY, ATLANTIS());
        const results:City = await facade.query(AppConst.GET_CITY_QUERY, {id: YS().id}) as City;

        // then 
        expect(results.id).toEqual(YS().id);
        expect(results.name).toEqual(YS().name);
    }); 
})