import { Container, Facade } from "@thetinyspark/coffe-maker";
import Resource from "../../../lib/core/model/schema/resources/Resource";
import AppConst from "../../../lib/core/ioc/app.const";
import { RESOURCES_MOCK } from "../../../lib/mock";
import { setup } from "../../setup.spec";

describe('GetResourcesQuery test suite', 
()=>{
    it('should be able to get all resources from repository', 
    async ()=>{
        // given 
        const facade:Facade = setup( new Container(), false, false) as Facade;
        const resources = RESOURCES_MOCK;
        // when 
        facade.sendNotification(AppConst.CREATE_RESOURCES, resources);
        const results:Resource[] = await facade.query(AppConst.GET_RESOURCES_QUERY) as Resource[];

        // then 
        expect(results.length).toEqual(resources.length);
        resources.forEach( 
            (current, index)=>{
                expect(current.id).toEqual(results[index].id);
                expect(current.name).toEqual(results[index].name);
            }
        );
    }); 
})