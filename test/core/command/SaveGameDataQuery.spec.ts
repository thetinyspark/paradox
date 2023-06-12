import { Facade } from "@thetinyspark/coffe-maker";
import AppConst from "../../../lib/core/ioc/app.const";
import { setup } from "../../setup.spec";
import  * as mock from "../../mock.spec";

describe('SaveGameDataQuery test suite', 
()=>{
    it('should be able to get all resources from repository', 
    async ()=>{
        // given 
        const facade:Facade = setup() as Facade;
        const expected = {
          cities: [mock.SHANGRILA()], 
          resources: mock.RESOURCES_MOCK, 
          templateBuildings: mock.TEMPLATE_BUILDINGS_MOCK
        }; 
        
        // when 
        facade.sendNotification(AppConst.ADD_CITY, mock.SHANGRILA() );
        const results:any = await facade.query(AppConst.SAVE_GAME_DATA_QUERY) as any;

        // then
        expect(results).toEqual(expected);
    }); 
})