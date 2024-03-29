import * as mock from "../../../mock.spec";
import Quantity from "../../../../lib/core/model/schema/resources/Quantity";
import { setup } from "../../../setup.spec";
import { Facade } from "@thetinyspark/coffe-maker";
import AppConst from "../../../../lib/core/ioc/app.const";
import IFactory from "../../../../lib/core/service/factory/IFactory";
import ResourceRepository from "../../../../lib/core/model/repository/ResourceRepository";
import Resource from "../../../../lib/core/model/schema/resources/Resource";

describe('QuantityFactory test suite', 
()=>{
    it('should be able to create a building from data according to its template', 
    ()=>{
        // given 
        const facade  = setup() as Facade;
        const factory = facade.getService(AppConst.QUANTITY_FACTORY) as IFactory;
        const data = mock.RESOURCES_MOCK;

        // when 
        const quantities = data.map( (r)=>factory.fromData({resourceID:r.id, amount:10}) );
        // then 
        expect(quantities.length).toEqual(data.length);
        quantities.forEach( 
            (quantity:Quantity,index:number)=>{
                expect(quantity).not.toBeNull();
                expect(quantity.resourceID).toEqual(data[index].id);
                expect(quantity.amount).toEqual(10);
            }
        )
    }); 

    it('should be able to bounded quantities', 
    ()=>{
        // given 
        const facade  = setup() as Facade;
        const factory = facade.getService(AppConst.QUANTITY_FACTORY) as IFactory;
        const repository = facade.getProxy(AppConst.RESOURCE_REPOSITORY) as ResourceRepository;
        const resources = mock.RESOURCES_MOCK;

        // when, then
        resources.forEach( 
            (current)=>{
                const quantity = factory.fromData({resourceID: current.id, amount: Infinity}) as Quantity;
                const resource = repository.getOneBy("id",quantity.resourceID) as Resource;
                expect(quantity.amount).toEqual(resource.max);
            }
        )
    }); 
})