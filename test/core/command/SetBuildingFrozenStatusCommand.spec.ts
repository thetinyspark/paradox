import { Facade } from "@thetinyspark/coffe-maker";
import IRepository from "../../../lib/core/model/repository/IRepository";
import AppConst from "../../../lib/core/ioc/app.const";
import { TEMPLATE_BUILDINGS_MOCK, YS } from "../../mock.spec";
import { setup } from "../../setup.spec";

describe('SetBuildingFrozenStatusCommand test suite', 
()=>{
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
        facade.sendNotification(AppConst.SET_BUILDING_FROZEN_STATUS, {cityID: data.id, id:1, frozen:true});
        const city = cityRepo.getOneBy('id', data.id);

        // then 
        expect(city.buildings[0].frozen).toBeTrue();
    });

    it('should not freeze anything if city or building does not exists', 
    ()=>{
        // given 
        const facade        = setup() as Facade;
        const cityRepo      = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<any>;
        const data          = YS();
        const template      = TEMPLATE_BUILDINGS_MOCK[0];

        // when 
        facade.sendNotification(AppConst.ADD_CITY, data);
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: data.id, tplID:template.id});
        facade.sendNotification(AppConst.SET_BUILDING_FROZEN_STATUS, {cityID: data.id, id:1001, frozen:true});
        facade.sendNotification(AppConst.SET_BUILDING_FROZEN_STATUS, {cityID: 1001, id:1, frozen:true});
        const city = cityRepo.getOneBy('id', data.id);

        // then 
        expect(city.buildings[0].frozen).toBeFalse();
    });
})