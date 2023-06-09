import * as mock from "../../../mock.spec";
import BuildingLevel from "../../../../lib/core/model/schema/building/BuildingLevel";
import { setup } from "../../../setup.spec";
import { Facade } from "@thetinyspark/coffe-maker";
import AppConst from "../../../../lib/core/ioc/app.const";
import IFactory from "../../../../lib/core/service/factory/IFactory";
import { BuildingLevelDescType } from "../../../../lib/core/model/types/BuildingLevelDescType";
import QuantityList from "../../../../lib/core/model/schema/resources/QuantityList";

describe('BuildingLevelFactory test suite', 
()=>{
    it('should be able to create a building from data according to its template', 
    ()=>{
        // given 
        const facade = setup() as Facade;
        const factory = facade.getService(AppConst.BUILDING_LEVEL_FACTORY) as IFactory;
        const data = mock.TEMPLATE_BUILDINGS_MOCK[0].levels;
        // when 
        const levels = data.map( levelData => factory.fromData(levelData) );

        // then 
        expect(levels.length).toEqual(data.length);
        levels.forEach( 
            (level:BuildingLevel,index:number)=>{
                expect(level).not.toBeNull();
                expect(level.cost.get().length).toEqual(data[index].cost.length);
                expect(level.prod.get().length).toEqual(data[index].prod.length);
                expect(level.cons.get().length).toEqual(data[index].cons.length);
                expect(level.sold.get().length).toEqual(data[index].sold.length);
                expect(level.level).toEqual(data[index].level);
            }
        )
    }); 

    it('should be able to create a building from data with default values if not provided', 
    ()=>{
        // given 
        const facade = setup() as Facade;
        const factory = facade.getService(AppConst.BUILDING_LEVEL_FACTORY) as IFactory;
        const data = {level:1};
        // when 

        const level = factory.fromData(data);

        // then 
        expect(level.level).toEqual(1);
        expect(level.prod).toEqual(new QuantityList());
        expect(level.cons).toEqual(new QuantityList());
        expect(level.sold).toEqual(new QuantityList());
        expect(level.cost).toEqual(new QuantityList());
    }); 
})