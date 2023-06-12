import BuildingLevel from "../../../../../lib/core/model/schema/building/BuildingLevel";
import Building from "../../../../../lib/core/model/schema/building/Building";

describe('Building test suite', 
()=>{
    it('should be able to create a building and add some levels', 
    ()=>{
        // given 
        const building1 = new Building("hello", new BuildingLevel(), 1, 1);
        const building2 = building1.clone();

        // when then
        expect(building1).toEqual(building2);
    }); 

    it('should have default values', 
    ()=>{
        // given 
        const building = new Building();

        // when then
        expect(building.id).toEqual(-1);
        expect(building.tplBuildingID).toEqual(-1);
        expect(building.name).toEqual("");
        expect(building.level).toBeNull();
    }); 
})