import { Container, Facade } from "@thetinyspark/coffe-maker";
import AppConst from "../../../lib/core/ioc/app.const";
import { RESOURCES_MOCK, SHANGRILA, TEMPLATE_BUILDINGS_MOCK } from "../../../lib/mock";
import { setup } from "../../setup.spec";

describe('RestoreSavedDataCommand test suite', 
()=>{
    it('should be able to create a set of cities and retrieve them', 
    async ()=>{
        // given 
        const facade:Facade = setup( new Container(), false, false) as Facade;
        const savedData = {
            cities: [SHANGRILA()], 
            resources: RESOURCES_MOCK, 
            templateBuildings: TEMPLATE_BUILDINGS_MOCK
        }
        
        // when 
        facade.sendNotification(AppConst.RESTORE_SAVED_DATA, savedData);
        const results = await facade.query(AppConst.SAVE_GAME_DATA_QUERY);

        // then 
        expect(results).not.toBeNull();
        expect(results).toEqual(savedData);
    });
})