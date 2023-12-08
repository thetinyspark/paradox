import QuantityList from "../../../../../lib/core/model/schema/resources/QuantityList";
import Quantity from "../../../../../lib/core/model/schema/resources/Quantity";

describe('Quantity test suite', 
()=>{
    it('should be able to create a QuantityList, set its value and retrieve it', 
    ()=>{
        // given 
        const list1 = [];
        const list2 = [
            new Quantity(1,10),
            new Quantity(2,10),
        ];

        // when 
        const list = new QuantityList(list1);
        const results1 = list.get();
        list.set(list2);
        const results2 = list.get();

        // then
        expect(results1).toEqual(list1);
        expect(results2).toEqual(list2);
    }); 

    it('should have default values', 
    ()=>{
        // given 
        const q = new Quantity();

        // when 

        // then
        expect(q.amount).toEqual(0);
        expect(q.resourceID).toEqual(-1);
    }); 

    it('should be able to create a Quantity', 
    ()=>{
        // given 
        const qty1 = new Quantity(1,10);
        const qty2 = new Quantity(2,10);

        // when 

        // then
        expect(qty1.resourceID).toEqual(1);
        expect(qty2.resourceID).toEqual(2);
    }); 

    it('should contains its amount in boundaries is specified', 
    ()=>{
        // given 
        const qty1 = new Quantity(1,0, -100, 100);
        const qty2 = new Quantity(1,0, -100, 100);
        qty1.amount -= 1000; 
        qty2.amount += 1000; 

        // when 

        // then
        expect(qty1.amount).toEqual(-100);
        expect(qty2.amount).toEqual(100);
    }); 
})