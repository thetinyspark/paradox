import TemplateBuilding from "../../../../../lib/core/model/schema/building/TemplateBuilding";
import BuildingLevel from "../../../../../lib/core/model/schema/building/BuildingLevel";
import Quantity from "../../../../../lib/core/model/schema/resources/Quantity";
import QuantityList from "../../../../../lib/core/model/schema/resources/QuantityList";

describe('Template Building test suite', 
()=>{
    it('should have default values', 
    ()=>{
        // given 
        const building = new TemplateBuilding();

        // when then
        expect(building.id).toEqual(-1);
        expect(building.levels).toEqual([]);
        expect(building.name).toEqual("");
    }); 

    it('should be able to create a building and add some levels', 
    ()=>{
        // given 
        const cost = new QuantityList( 
            [
                new Quantity(1,100),
                new Quantity(2,100)
            ]
        );

        const prod = new QuantityList( 
            [
                new Quantity(3,100),
                new Quantity(4,100)
            ]
        );

        // when 
        const level1 = new BuildingLevel(1, cost, prod);
        const building = new TemplateBuilding(1, "castle", [level1]); 

        // when then
        expect(building.levels.length).toEqual(1);
        expect(building.levels[0].cost).toEqual(cost);
        expect(building.levels[0].prod).toEqual(prod);
    }); 

    it('should be able to clone a building and its levels', 
    ()=>{
        // given 
        const cost1 = new QuantityList( [new Quantity(1,100),new Quantity(2,100)]);
        const prod1 = new QuantityList( [new Quantity(3,100),new Quantity(4,100)]);

        const cost2 = new QuantityList( [new Quantity(1,200),new Quantity(2,200)]);
        const prod2 = new QuantityList( [new Quantity(3,200),new Quantity(4,200)]);

        const cost3 = new QuantityList( [new Quantity(1,300),new Quantity(2,300)]);
        const prod3 = new QuantityList( [new Quantity(3,300),new Quantity(4,300)]);

        const level1 = new BuildingLevel(1, cost1, prod1);
        const level2 = new BuildingLevel(1, cost2, prod2);
        const level3 = new BuildingLevel(1, cost3, prod3);

        // when 
        const building1 = new TemplateBuilding(1, "castle", [level1,level2,level3]); 
        const building2 = building1.clone();

        // when then
        expect(building1.id).toEqual(building2.id);
        expect(building1.name).toEqual(building2.name);
        expect(building1.levels).toEqual(building2.levels);
    }); 
})