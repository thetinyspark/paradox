import { Facade } from "@thetinyspark/coffe-maker";
import AppConst from "../../../lib/core/ioc/app.const";
import IRepository from "../../../lib/core/model/repository/IRepository";
import { ATLANTIS, TEMPLATE_BUILDINGS_MOCK, YS } from "../../mock.spec";
import { setup } from "../../setup.spec";
import City from "../../../lib/core/model/schema/city/City";

describe('AddBuildingToCityCommand test suite', 
()=>{
    it('should be able to add a building to an existing city', 
    ()=>{
        // given 
        const facade            = setup() as Facade;
        const cityRepo          = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<any>;
        const buildings:any[]   = TEMPLATE_BUILDINGS_MOCK;
        const atData:any        = ATLANTIS();
        const ysData:any        = YS();

        // when 
        facade.sendNotification(AppConst.ADD_CITY, ysData);
        facade.sendNotification(AppConst.ADD_CITY, atData);
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: atData.id, tplID: 1});
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: atData.id, tplID: 2});
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: ysData.id, tplID: 3});

        const atlantis = cityRepo.getAllBy('id', atData.id)[0];
        const ys = cityRepo.getAllBy('id', ysData.id)[0];
        // then 

        expect(atlantis).toBeTruthy();
        expect(ys).toBeTruthy();
        expect(atlantis.buildings.length).toEqual(2);
        expect(ys.buildings.length).toEqual(1);
        expect(atlantis.buildings[0].name).toEqual(buildings[0].name);
        expect(atlantis.buildings[1].name).toEqual(buildings[1].name);
        expect(ys.buildings[0].name).toEqual(buildings[2].name);
    });

    it('should not be able to add a building to an existing city if city does not exists or tplid does not exists', 
    async ()=>{
        // given 
        const facade            = setup() as Facade;
        const cityRepo          = facade.getProxy(AppConst.CITY_REPOSITORY) as IRepository<any>;
        const buildings:any[]   = TEMPLATE_BUILDINGS_MOCK;
        const atData:any        = ATLANTIS();
        const ysData:any        = YS();

        // when 
        facade.sendNotification(AppConst.ADD_CITY, ysData);
        facade.sendNotification(AppConst.ADD_CITY, atData);

        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: atData.id, tplID: 10});
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: atData.id+10, tplID: 2});
        facade.sendNotification(AppConst.ADD_BUILDING_TO_CITY, {cityID: ysData.id+10, tplID: 30});

        const atlantis = cityRepo.getOneBy('id', atData.id);
        const ys = cityRepo.getOneBy('id', ysData.id);
        // then 

        expect(atlantis).toBeTruthy();
        expect(ys).toBeTruthy();
        expect(atlantis.buildings.length).toEqual(0);
        expect(ys.buildings.length).toEqual(0);
    });
})