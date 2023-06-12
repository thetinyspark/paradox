import { Facade } from "@thetinyspark/coffe-maker";
import AppConst from "../../../lib/core/ioc/app.const";
import IRepository from "../../../lib/core/model/repository/IRepository";
import { ATLANTIS } from "../../mock.spec";
import { setup } from "../../setup.spec";
import City from "../../../lib/core/model/schema/city/City";

describe('UpgradeBuildingCommand test suite', 
()=>{


    it('should be able to upgrade a building in an existing city', 
    ()=>{
        // given 
        const facade            = setup() as Facade;
        const cityRepo          = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<any>;

        // when 
        facade.sendNotification(AppConst.ADD_CITY, ATLANTIS());
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: ATLANTIS().id, tplID: 1});
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: ATLANTIS().id, tplID: 1});

        const atlantis = cityRepo.getOneBy('id', ATLANTIS().id);
        atlantis.wallet.get()[0].amount = 200;
        atlantis.wallet.get()[1].amount = 200;

        facade.sendNotification(AppConst.UPGRADE_BUILDING, {cityID: ATLANTIS().id, id:1});

        // then 
        expect(atlantis.buildings[0].level.level).toEqual(2);
        expect(atlantis.buildings[1].level.level).toEqual(1);

    });

    it('should be able to upgrade a building in an existing city for free', 
    ()=>{
        // given 
        const facade            = setup() as Facade;
        const cityRepo          = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<any>;

        // when 
        facade.sendNotification(AppConst.ADD_CITY, ATLANTIS());
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: ATLANTIS().id, tplID: 1});
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: ATLANTIS().id, tplID: 1});

        const atlantis = cityRepo.getOneBy('id', ATLANTIS().id);
        facade.sendNotification(AppConst.UPGRADE_BUILDING, {cityID: ATLANTIS().id, id: 1, freely:true});

        // then 

        expect(atlantis.buildings[0].level.level).toEqual(2);
        expect(atlantis.buildings[1].level.level).toEqual(1);
    });

    it('should not be able to upgrade a building in a non existing city for free', 
    ()=>{
        // given 
        const facade            = setup() as Facade;
        const cityRepo          = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<any>;

        // when 
        facade.sendNotification(AppConst.ADD_CITY, ATLANTIS());
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: ATLANTIS().id, tplID: 1});
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: ATLANTIS().id, tplID: 1});

        const atlantis = cityRepo.getOneBy('id', ATLANTIS().id);
        facade.sendNotification(AppConst.UPGRADE_BUILDING, {cityID: ATLANTIS().id+ 100, id: 1, freely:true});

        // then 

        expect(atlantis.buildings[0].level.level).toEqual(1);
        expect(atlantis.buildings[1].level.level).toEqual(1);
    });

    it('should not be able to upgrade a building if template does not exists', 
    ()=>{
        // given 
        const facade            = setup() as Facade;
        const cityRepo          = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<any>;

        // when 
        facade.sendNotification(AppConst.ADD_CITY, ATLANTIS());
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: ATLANTIS().id, tplID: 1});
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: ATLANTIS().id, tplID: 1});

        const atlantis = cityRepo.getOneBy('id', ATLANTIS().id) as City;
        atlantis.buildings[0].tplBuildingID = 100;

        facade.sendNotification(AppConst.UPGRADE_BUILDING, {cityID: ATLANTIS().id, id: 1, freely:true});

        // then 

        expect(atlantis.buildings[0].level.level).toEqual(1);
        expect(atlantis.buildings[1].level.level).toEqual(1);
    });

    it('should not be able to upgrade a building if next level does not exists', 
    ()=>{
        // given 
        const facade            = setup() as Facade;
        const cityRepo          = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<any>;

        // when 
        facade.sendNotification(AppConst.ADD_CITY, ATLANTIS());
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: ATLANTIS().id, tplID: 3});
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: ATLANTIS().id, tplID: 3});

        const atlantis = cityRepo.getOneBy('id', ATLANTIS().id) as City;
        facade.sendNotification(AppConst.UPGRADE_BUILDING, {cityID: ATLANTIS().id, id: 1, freely:true});

        // then 

        expect(atlantis.buildings[0].level.level).toEqual(1);
        expect(atlantis.buildings[1].level.level).toEqual(1);
    });
})