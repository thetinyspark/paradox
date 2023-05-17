import * as mock from "../../../../lib/mock";
import Resource from "../../../../lib/core/model/schema/resources/Resource";
import { setup } from "../../../setup.spec";
import { Facade } from "@thetinyspark/coffe-maker";
import AppConst from "../../../../lib/core/ioc/app.const";
import IFactory from "../../../../lib/core/service/factory/IFactory";

describe('ResourceFactory test suite', 
()=>{
    it('should be able to create a building from data according to its template', 
    ()=>{
        // given 
        const facade = setup() as Facade;
        const factory = facade.getService(AppConst.RESOURCE_FACTORY) as IFactory;
        const data = mock.RESOURCES_MOCK;

        // when 
        const resources = data.map( factory.fromData );

        // then 
        expect(resources.length).toEqual(data.length)
        resources.forEach( 
            (resource:Resource,index:number)=>{
                expect(resource.id).toEqual(data[index].id);
                expect(resource.name).toEqual(data[index].name);
            }
        )
    }); 
})