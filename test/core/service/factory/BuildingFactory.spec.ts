import { Facade } from "@thetinyspark/coffe-maker";
import AppConst from "../../../../lib/core/ioc/app.const";
import BuildingFactory from "../../../../lib/core/service/factory/BuildingFactory";
import * as mock from "../../../../lib/mock";
import Repository from "../../../../lib/core/model/repository/Repository";
import TemplateBuilding from "../../../../lib/core/model/schema/building/TemplateBuilding";
import { setup } from "../../../setup.spec";

describe('BuildingFactory test suite', 
()=>{
    it('should be able to create a building from data according to its template', 
    ()=>{
        // given 
        const facade = setup() as Facade;
        const tplRepo = facade.getProxy(AppConst.TEMPLATE_BUILDING_REPOSITORY) as Repository<TemplateBuilding>;
        const factory = new BuildingFactory(tplRepo);

        // when 
        const tpl = mock.TEMPLATE_BUILDINGS_MOCK[0];
        const building = factory.fromData({tplID: tpl.id});

        // then 
        expect(building).not.toBeNull();
        expect(building.name).toEqual(tpl.name);
        expect(building.tplBuildingID).toEqual(tpl.id);
        expect(building.level.level).toEqual(tpl.levels[0].level);
        expect(building.level.cost.get().length).toEqual(tpl.levels[0].cost.length);
        expect(building.level.prod.get().length).toEqual(tpl.levels[0].prod.length);
    }); 

    it('should be able to create a building from data according to its template even when template has empty levels', 
    ()=>{
        // given 
        const facade = setup() as Facade;
        const tplRepo = facade.getProxy(AppConst.TEMPLATE_BUILDING_REPOSITORY) as Repository<TemplateBuilding>;
        const factory = new BuildingFactory(tplRepo);

        // when 
        const tpl = mock.TEMPLATE_BUILDINGS_MOCK[3];
        const building = factory.fromData({tplID: tpl.id});

        // then 
        expect(building).not.toBeNull();
        expect(building.name).toEqual(tpl.name);
        expect(building.tplBuildingID).toEqual(tpl.id);
        expect(building.level).toBeNull();
    }); 
})