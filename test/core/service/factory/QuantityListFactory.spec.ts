import * as mock from "../../../../lib/mock";
import Quantity from "../../../../lib/core/model/schema/resources/Quantity";
import { Facade } from "@thetinyspark/coffe-maker";
import AppConst from "../../../../lib/core/ioc/app.const";
import IFactory from "../../../../lib/core/service/factory/IFactory";
import { setup } from "../../../setup.spec";

describe('QuantityListFactory test suite', 
()=>{
    it('should be able to create a building from data according to its template', 
    ()=>{
        // given 
        const facade = setup() as Facade;
        const factory = facade.getService(AppConst.QUANTITY_LIST_FACTORY) as IFactory
        const data = mock.RESOURCES_MOCK.map( r => { return {resourceID:r.id, amount: 10} } );

        // when 
        const list = factory.fromData(data);
        const quantities = list.get();

        // then 
        expect(quantities.length).toEqual(data.length);
        quantities.forEach( 
            (quantity:Quantity,index:number)=>{
                expect(quantity).not.toBeNull();
                expect(quantity.resourceID).toEqual(data[index].resourceID);
                expect(quantity.amount).toEqual(10);
            }
        )
    }); 
})