import Resource from "../../../../../lib/core/model/schema/resources/Resource";

describe('Resource test suite', 
()=>{
    it('should be able to create a Resource with default values', 
    ()=>{
        // given 
        const res = new Resource();
        // when then
        expect(res.id).toEqual(-1);
        expect(res.name).toEqual("");
    }); 
})