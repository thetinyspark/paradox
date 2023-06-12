import { Facade } from "@thetinyspark/coffe-maker";
import IRepository from "../../../lib/core/model/repository/IRepository";
import AppConst from "../../../lib/core/ioc/app.const";
import { YS } from "../../../lib/mock";
import { setup } from "../../setup.spec";
import QuantityList from "../../../lib/core/model/schema/resources/QuantityList";

describe('DoCycleCommand test suite', 
()=>{


    it('should be able to process a cycle for each city, and add each produced resource to each city wallet', 
    ()=>{
        // given 
        const facade        = setup() as Facade;
        const cityRepo      = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<any>;
        const data          = YS();
        const numCycles     = 2;

        // when 
        facade.sendNotification(AppConst.ADD_CITY, data);
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: data.id, tplID:1});
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: data.id, tplID:5});
        const ys = cityRepo.getOneBy('id',data.id);


        for( let i = 0; i < numCycles; i++ ){
            facade.sendNotification(AppConst.DO_CYCLE);
        }

        // then 
        ys.wallet.get().forEach(
            (quantity, index) => {
                const building1 = ys.buildings[0];
                const building2 = ys.buildings[1];
                const prod1 = ( building1.level.prod as QuantityList).get().find( q=>q.resourceID === quantity.resourceID)?.amount || 0;
                const prod2 = ( building2.level.prod as QuantityList).get().find( q=>q.resourceID === quantity.resourceID)?.amount || 0;
                const cons1 = ( building1.level.cons as QuantityList).get().find( q=>q.resourceID === quantity.resourceID)?.amount || 0;
                const cons2 = ( building2.level.cons as QuantityList).get().find( q=>q.resourceID === quantity.resourceID)?.amount || 0;

                const prod = (prod1 + prod2) * numCycles;
                const cons = (cons1 + cons2) * numCycles;
                const total = prod - cons;

                expect(quantity.amount).toEqual(total);
            }
        );
    });
})