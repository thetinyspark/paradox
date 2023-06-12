import * as mock from "../../../mock.spec";
import Quantity from "../../../../lib/core/model/schema/resources/Quantity";
import { setup } from "../../../setup.spec";
import { Facade } from "@thetinyspark/coffe-maker";
import AppConst from "../../../../lib/core/ioc/app.const";
import IFactory from "../../../../lib/core/service/factory/IFactory";

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
})