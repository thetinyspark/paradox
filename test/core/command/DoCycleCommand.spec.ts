import { Facade } from "@thetinyspark/coffe-maker";
import IRepository from "../../../lib/core/model/repository/IRepository";
import AppConst from "../../../lib/core/ioc/app.const";
import { TEMPLATE_BUILDINGS_MOCK, YS } from "../../mock.spec";
import { setup } from "../../setup.spec";
import QuantityList from "../../../lib/core/model/schema/resources/QuantityList";
import Quantity from "../../../lib/core/model/schema/resources/Quantity";

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

    it('should be able to process a cycle and an amount of resources to an already existing resource in wallet', 
    ()=>{
        // given 
        const facade        = setup() as Facade;
        const cityRepo      = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<any>;
        const data          = YS();
        const template = TEMPLATE_BUILDINGS_MOCK[0];
        const base = {...template.levels[0].prod[0]};
        const expected = base.amount + base.amount - template.levels[0]?.cons[0]?.amount || 0;
        data.wallet = [base];

        // when 
        facade.sendNotification(AppConst.ADD_CITY, data);
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: data.id, tplID:template.id});
        const ys = cityRepo.getOneBy('id',data.id);
        facade.sendNotification(AppConst.DO_CYCLE);

        const current = ys.wallet.get().find( q=>q.resourceID === base.resourceID) as Quantity;
        // then 

        expect(current.amount).toEqual(expected)
    });

    it('should be able to remove a non existing resource from the wallet', 
    ()=>{
        // given 
        const facade        = setup() as Facade;
        const cityRepo      = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<any>;
        const resoRepo      = facade.getProxy(AppConst.RESOURCE_REPOSITORY) as IRepository<any>;
        const data          = YS();
        const template      = TEMPLATE_BUILDINGS_MOCK[0];
        const resource      = resoRepo.getAll()[0];
        const consumption   = new Quantity(resource.resourceID, 10);

        // when 
        facade.sendNotification(AppConst.ADD_CITY, data);
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: data.id, tplID:template.id});

        const city = cityRepo.getOneBy('id', data.id);
        const building = city.buildings[0];
        building.level.prod = new QuantityList([]);
        building.level.cons = new QuantityList([consumption])
        facade.sendNotification(AppConst.DO_CYCLE);
        const results = city.wallet.get().find( q=>q.resourceID === consumption.resourceID);

        // then 
        expect(results.amount).toEqual(-consumption.amount)
    });

    it('should  do nothing if building level is null', 
    ()=>{
        // given 
        const facade        = setup() as Facade;
        const cityRepo      = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<any>;
        const data          = YS();
        const template      = TEMPLATE_BUILDINGS_MOCK[0];

        // when 
        facade.sendNotification(AppConst.ADD_CITY, data);
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: data.id, tplID:template.id});

        const city = cityRepo.getOneBy('id', data.id);
        const building = city.buildings[0];
        building.level = null;
        facade.sendNotification(AppConst.DO_CYCLE);
        
        // then 
        expect( city.wallet.get().length ).toEqual(0);
    });

    it('should not add resources to the wallet if building is frozen', 
    ()=>{
        // given 
        const facade        = setup() as Facade;
        const cityRepo      = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<any>;
        const data          = YS();
        const template      = TEMPLATE_BUILDINGS_MOCK[0];

        // when 
        facade.sendNotification(AppConst.ADD_CITY, data);
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: data.id, tplID:template.id});

        const city = cityRepo.getOneBy('id', data.id);
        city.buildings[0].frozen = true;

        facade.sendNotification(AppConst.DO_CYCLE);

        // then 
        city.wallet.get().forEach( 
            (quantity:Quantity)=>{
                expect(quantity.amount).toEqual(0);
            }
        )
    });
})