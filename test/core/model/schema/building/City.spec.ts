import City from "../../../../../lib/core/model/schema/city/City";
import QuantityList from "../../../../../lib/core/model/schema/resources/QuantityList";

describe('City test suite', 
()=>{
    it('should be able to create a city with default values', 
    ()=>{
        // given 
        const city = new City();
        // when then
        expect(city.id).toEqual(-1);
        expect(city.name).toEqual("");
        expect(city.buildings).toEqual([]);
        expect(city.wallet).toEqual(new QuantityList([]));
    }); 
})