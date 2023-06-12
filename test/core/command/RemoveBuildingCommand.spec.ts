import { Facade } from "@thetinyspark/coffe-maker";
import AppConst from "../../../lib/core/ioc/app.const";
import IRepository from "../../../lib/core/model/repository/IRepository";
import { ATLANTIS } from "../../mock.spec";
import { setup } from "../../setup.spec";

describe('RemoveBuildingCommand test suite', 
()=>{
    it('should be able to add a building to an existing city', 
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
        facade.sendNotification(AppConst.REMOVE_BUILDING_FROM_CITY, {cityID: atData.id, id:1});

        const atlantis = cityRepo.getOneBy('id', atData.id);

        // then 
        expect(atlantis).toBeTruthy();
        expect(atlantis.buildings.length).toEqual(2);
        expect(atlantis.buildings[0].id).toEqual(2);
        expect(atlantis.buildings[1].id).toEqual(3);
    
    });
})