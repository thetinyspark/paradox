import { Facade } from "@thetinyspark/coffe-maker";
import AppConst from "../../../lib/core/ioc/app.const";
import Repository from "../../../lib/core/model/repository/Repository";
import { ATLANTIS, TEMPLATE_BUILDINGS_MOCK } from "../../../lib/mock";
import { setup } from "../../setup.spec";

describe('UpgradeBuildingCommand test suite', 
()=>{


    it('should be able to upgrade a building in an existing city', 
    ()=>{
        // given 
        const facade            = setup() as Facade;
        const cityRepo          = facade.getProxy(AppConst.CITY_REPOSITORY) as Repository<any>;

        // when 
        facade.sendNotification(AppConst.ADD_CITY, ATLANTIS());
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: ATLANTIS().id, tplID: 1});

        const atlantis = cityRepo.getOneBy('id', ATLANTIS().id);
        atlantis.wallet.get()[0].amount = 200;
        atlantis.wallet.get()[1].amount = 200;

        facade.sendNotification(AppConst.UPGRADE_BUILDING, {cityID: ATLANTIS().id, tplID: TEMPLATE_BUILDINGS_MOCK[0].id});

        // then 

        expect(atlantis.buildings[0].level.level).toEqual(2);

    });

    it('should be able to upgrade a building in an existing city for free', 
    ()=>{
        // given 
        const facade            = setup() as Facade;
        const cityRepo          = facade.getProxy(AppConst.CITY_REPOSITORY) as Repository<any>;

        // when 
        facade.sendNotification(AppConst.ADD_CITY, ATLANTIS());
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: ATLANTIS().id, tplID: 1});

        const atlantis = cityRepo.getOneBy('id', ATLANTIS().id);
        facade.sendNotification(AppConst.UPGRADE_BUILDING, {cityID: ATLANTIS().id, tplID: TEMPLATE_BUILDINGS_MOCK[0].id, freely:true});

        // then 

        expect(atlantis.buildings[0].level.level).toEqual(2);
    });
})