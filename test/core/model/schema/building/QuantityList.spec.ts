import Quantity from "../../../../../lib/core/model/schema/resources/Quantity";
import QuantityList from "../../../../../lib/core/model/schema/resources/QuantityList";

describe('QuantityList test suite', 
()=>{
    it('should be able to create a QuantityList with an array of quantity objects', 
    ()=>{
        // given 
        const quantity = new QuantityList();
        // when then
        expect(quantity.get()).toEqual([]);
    }); 

    it('should be able to get/set quantities', 
    ()=>{
        // given 
        const quantity = new QuantityList([]);


        // when 
        quantity.set( [ new Quantity(1,0)]);
        //then
        expect(quantity.get().length).toEqual(1);
        expect(quantity.get()[0].resourceID).toEqual(1);
        expect(quantity.get()[0].amount).toEqual(0);
    }); 

    it('should be able to clone a quantitylist', 
    ()=>{
        // given 
        const quantity1 = new QuantityList([new Quantity(1,0)]);
        // when 
        const quantity2 = quantity1.clone();
        //then
        expect(quantity1).toEqual(quantity2);
    }); 
})