import { Facade } from "@thetinyspark/coffe-maker";
import IRepository from "../../../lib/core/model/repository/IRepository";
import AppConst from "../../../lib/core/ioc/app.const";
import { ATLANTIS, TEMPLATE_BUILDINGS_MOCK, YS } from "../../mock.spec";
import { setup } from "../../setup.spec";

describe('BuyBuildingCommand test suite', 
()=>{
    it('should be able to add a building to an existing city', 
    ()=>{
        // given 
        const facade            = setup() as Facade;
        const cityRepo          = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<any>;
        const atData:any        = ATLANTIS();
        const ysData:any        = YS();

        // when 
        facade.sendNotification(AppConst.ADD_CITY, atData);
        facade.sendNotification(AppConst.ADD_CITY, ysData);
        facade.sendNotification(AppConst.BUY_BUILDING, {cityID: atData.id, tplID: 1});
        facade.sendNotification(AppConst.BUY_BUILDING, {cityID: atData.id, tplID: 2});
        facade.sendNotification(AppConst.BUY_BUILDING, {cityID: atData.id, tplID: 4});
        facade.sendNotification(AppConst.BUY_BUILDING, {cityID: ysData.id, tplID: 3});
        facade.sendNotification(AppConst.BUY_BUILDING, {cityID: ysData.id, tplID: 4});

        const atlantis = cityRepo.getOneBy('id', atData.id);
        const ys = cityRepo.getOneBy('id', ysData.id);

        // then 
        expect(atlantis.buildings.length).toEqual(3);
        expect(ys.buildings.length).toEqual(1);
    });

    it('should be able to add a building to an existing city for free', 
    ()=>{
        // given 
        const facade            = setup() as Facade;
        const cityRepo          = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<any>;
        const buildings:any[]   = TEMPLATE_BUILDINGS_MOCK;
        const ysData:any        = YS();

        // when 
        facade.sendNotification(AppConst.ADD_CITY, ysData);
        facade.sendNotification(AppConst.BUY_BUILDING, {cityID: ysData.id, tplID: 1, freely:true});

        const ys = cityRepo.getOneBy('id', ysData.id);

        // then 
        expect(ys.buildings.length).toEqual(1);
    });

    it('should not be able to buyd a building if city or template does not exists', 
    ()=>{
        // given 
        const facade            = setup() as Facade;
        const cityRepo          = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<any>;
        const buildings:any[]   = TEMPLATE_BUILDINGS_MOCK;
        const ysData:any        = YS();

        // when 
        facade.sendNotification(AppConst.ADD_CITY, ysData);
        facade.sendNotification(AppConst.BUY_BUILDING, {cityID: ysData.id, tplID: -1, freely:true});
        facade.sendNotification(AppConst.BUY_BUILDING, {cityID: -1, tplID: 1, freely:true});
        facade.sendNotification(AppConst.BUY_BUILDING, {cityID: -1, tplID: -1, freely:true});

        const ys = cityRepo.getOneBy('id', ysData.id);

        // then 
        expect(ys.buildings.length).toEqual(0);
    });
})