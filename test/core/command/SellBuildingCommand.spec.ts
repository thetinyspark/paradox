import { Facade } from "@thetinyspark/coffe-maker";
import AppConst from "../../../lib/core/ioc/app.const";
import IRepository from "../../../lib/core/model/repository/IRepository";
import { ATLANTIS } from "../../mock.spec";
import { setup } from "../../setup.spec";
import City from "../../../lib/core/model/schema/city/City";
import Quantity from "../../../lib/core/model/schema/resources/Quantity";

describe('SellBuildingCommand test suite', 
()=>{
    it('should be able to add a building to an existing city (and it should reset ids according to building positions)', 
    async ()=>{
        // given 
        const facade            = setup() as Facade;
        const cityRepo          = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<any>;
        const atData:any        = ATLANTIS();

        // when 
        facade.sendNotification(AppConst.ADD_CITY, atData);
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: atData.id, tplID: 1});
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: atData.id, tplID: 2});
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: atData.id, tplID: 3});
        

        const atlantis = cityRepo.getOneBy('id', atData.id) as City;
        const targetBuilding = atlantis.buildings[0];
        const ok1 = await facade.query(AppConst.SELL_BUILDING, {cityID: atData.id, id:targetBuilding.id});

        // then 
        expect(atlantis).toBeTruthy();
        expect(atlantis.buildings.length).toEqual(2);
        expect(atlantis.buildings[0].id).toEqual(2);
        expect(atlantis.buildings[1].id).toEqual(3);
        expect(ok1).toBeTrue();

        const list = targetBuilding.level.sold.get();
        list.forEach( 
            (quant, index)=>{
                const walletQ = atlantis.wallet.get().find( (q)=>q.resourceID === quant.resourceID) as Quantity;
                const ref = atData.wallet.find( r=>r.resourceID === walletQ.resourceID) as any;
                const baseAmount = ref.amount; 
                const currentAmount = walletQ.amount;
                const expectedAmount = baseAmount + quant.amount;
                expect(currentAmount).toEqual(expectedAmount);
            }
        );
    });

    it('should not be able to sell a building to a non existing city', 
    async ()=>{
        // given 
        const facade            = setup() as Facade;
        const cityRepo          = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<any>;
        const atData:any        = ATLANTIS();

        // when 
        facade.sendNotification(AppConst.ADD_CITY, atData);
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: atData.id, tplID: 1});
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: atData.id, tplID: 2});
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: atData.id, tplID: 3});
        const ok1 = await facade.query(AppConst.SELL_BUILDING, {cityID: atData.id+30, id:1});

        const atlantis = cityRepo.getOneBy('id', atData.id);

        // then 
        expect(ok1).toBeFalse();
        expect(atlantis).toBeTruthy();
        expect(atlantis.buildings.length).toEqual(3);
    
    });

    it('should not be able to sell a non existing building froml a city', 
    ()=>{
        // given 
        const facade            = setup() as Facade;
        const cityRepo          = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<any>;
        const atData:any        = ATLANTIS();

        // when 
        facade.sendNotification(AppConst.ADD_CITY, atData);
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: atData.id, tplID: 1});
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: atData.id, tplID: 2});
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: atData.id, tplID: 3});
        facade.sendNotification(AppConst.SELL_BUILDING, {cityID: atData.id, id:100});

        const atlantis = cityRepo.getOneBy('id', atData.id);

        // then 
        expect(atlantis).toBeTruthy();
        expect(atlantis.buildings.length).toEqual(3);
    
    });
})