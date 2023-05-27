import { Facade } from "@thetinyspark/coffe-maker";
import Repository from "../../../lib/core/model/repository/Repository";
import AppConst from "../../../lib/core/ioc/app.const";
import { TEMPLATE_BUILDINGS_MOCK, YS } from "../../../lib/mock";
import { setup } from "../../setup.spec";

describe('DoCycleCommand test suite', 
()=>{


    it('should be able to process a cycle for each city, and add each produced resource to each city wallet', 
    ()=>{
        // given 
        const facade        = setup() as Facade;
        const cityRepo      = facade.getProxy(AppConst.CITY_REPOSITORY) as Repository<any>;
        const data          = YS();
        const buildings     = data.buildings as any[];
        const numCycles     = 2;

        buildings.push(
            {tplID: TEMPLATE_BUILDINGS_MOCK[0].id}, 
            {tplID: TEMPLATE_BUILDINGS_MOCK[3].id}
        );

        // when 
        facade.sendNotification(AppConst.ADD_CITY, data);
        for( let i = 0; i < numCycles; i++ ){
            facade.sendNotification(AppConst.DO_CYCLE);
        }

        const ys = cityRepo.getOneBy('id',data.id);
        ys.wallet.get().forEach(
            (quantity, index) => {
                const tpl = TEMPLATE_BUILDINGS_MOCK[0];
                expect(quantity.resourceID).toEqual( tpl.levels[0].prod[index].resourceID);
                expect(quantity.amount).toEqual( tpl.levels[0].prod[index].amount * numCycles);
            }
        );
        // then 

    });
})