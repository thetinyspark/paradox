import { Container, Facade } from "@thetinyspark/coffe-maker";
import Repository from "../../../lib/core/model/repository/Repository";
import AppConst from "../../../lib/core/ioc/app.const";
import { RESOURCES_MOCK } from "../../../lib/mock";
import { setup } from "../../setup.spec";

describe('CreateResourcesCommand test suite', 
()=>{
    it('should be able to create a set of resources and retrieve them', 
    ()=>{
        // given 
        const facade:Facade = setup(new Container(), false, false) as Facade;
        const proxy = facade.getProxy(AppConst.RESOURCE_REPOSITORY) as Repository<any>;
        const resources:any[] = RESOURCES_MOCK;
        
        // when 
        facade.sendNotification(AppConst.CREATE_RESOURCES, resources);
        const results =  proxy.getAll();

        // then 
        results.forEach( 
            (current, index)=>{
                expect(current.id).toEqual(resources[index].id);
                expect(current.name).toEqual(resources[index].name);
            }
        );
    });
})