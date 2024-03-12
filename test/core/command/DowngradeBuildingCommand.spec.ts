import { Facade } from "@thetinyspark/coffe-maker";
import AppConst from "../../../lib/core/ioc/app.const";
import IRepository from "../../../lib/core/model/repository/IRepository";
import { ATLANTIS } from "../../mock.spec";
import { setup } from "../../setup.spec";

describe('DowngradeBuildingCommand test suite', 
()=>{


    it('should be able to downgrade a building in an existing city (minus one level by default)', 
    async ()=>{
        // given 
        const facade            = setup() as Facade;
        const cityRepo          = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<any>;

        // when 
        facade.sendNotification(AppConst.ADD_CITY, ATLANTIS());
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: ATLANTIS().id, tplID: 1});

        const atlantis = cityRepo.getOneBy('id', ATLANTIS().id);
        const ok1 = await facade.query(AppConst.UPGRADE_BUILDING, {cityID: ATLANTIS().id, id:1, freely: true});
        const ok2 = await facade.query(AppConst.UPGRADE_BUILDING, {cityID: ATLANTIS().id, id:1, freely: true});
        const ok3 = await facade.query(AppConst.DOWNGRADE_BUILDING, {cityID: ATLANTIS().id, id:1});

        // then 
        expect(ok1).toBeTrue();
        expect(ok2).toBeTrue();
        expect(ok3).toBeTrue();
        expect(atlantis.buildings[0].level.level).toEqual(2);
    });

    it('should be able to downgrade a building in an existing city by "x" level ', 
    async ()=>{
        // given 
        const facade            = setup() as Facade;
        const cityRepo          = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<any>;

        // when 
        facade.sendNotification(AppConst.ADD_CITY, ATLANTIS());
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: ATLANTIS().id, tplID: 1});

        const atlantis = cityRepo.getOneBy('id', ATLANTIS().id);
        const ok1 = await facade.query(AppConst.UPGRADE_BUILDING, {cityID: ATLANTIS().id, id:1, freely: true});
        const ok2 = await facade.query(AppConst.UPGRADE_BUILDING, {cityID: ATLANTIS().id, id:1, freely: true});
        const ok3 = await facade.query(AppConst.DOWNGRADE_BUILDING, {cityID: ATLANTIS().id, id:1, minus: 2});

        // then 
        expect(ok1).toBeTrue();
        expect(ok2).toBeTrue();
        expect(ok3).toBeTrue();
        expect(atlantis.buildings[0].level.level).toEqual(1);
    });

    it('should be able to remove a building from a city if the downgrade is too strong (final level <= 0)', 
    async ()=>{
        // given 
        const facade            = setup() as Facade;
        const cityRepo          = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<any>;

        // when 
        facade.sendNotification(AppConst.ADD_CITY, ATLANTIS());
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: ATLANTIS().id, tplID: 1});

        const atlantis = cityRepo.getOneBy('id', ATLANTIS().id);
        const ok1 = await facade.query(AppConst.UPGRADE_BUILDING, {cityID: ATLANTIS().id, id:1, freely: true});
        const ok2 = await facade.query(AppConst.UPGRADE_BUILDING, {cityID: ATLANTIS().id, id:1, freely: true});
        const ok3 = await facade.query(AppConst.DOWNGRADE_BUILDING, {cityID: ATLANTIS().id, id:1, minus: 3});

        // then 
        expect(ok1).toBeTrue();
        expect(ok2).toBeTrue();
        expect(ok3).toBeTrue();
        expect(atlantis.buildings.length).toEqual(0);
    });
})