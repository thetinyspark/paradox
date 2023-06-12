import { Facade } from "@thetinyspark/coffe-maker";
import AppConst from "../../../../lib/core/ioc/app.const";
import * as mock from "../../../mock.spec";
import { setup } from "../../../setup.spec";
import IFactory from "../../../../lib/core/service/factory/IFactory";

describe('BuildingFactory test suite', 
()=>{
    it('should be able to create a building from data according to its template', 
    ()=>{
        // given 
        const facade = setup() as Facade;
        const factory = facade.getService(AppConst.BUILDING_FACTORY) as IFactory;

        // when 
        const tpl = mock.TEMPLATE_BUILDINGS_MOCK[0];
        const building = factory.fromData({tplID: tpl.id, id:10});

        // then 
        expect(building).not.toBeNull();
        expect(building.name).toEqual(tpl.name);
        expect(building.tplBuildingID).toEqual(tpl.id);
        expect(building.level.level).toEqual(tpl.levels[0].level);
        expect(building.level.cost.get().length).toEqual(tpl.levels[0].cost.length);
        expect(building.level.prod.get().length).toEqual(tpl.levels[0].prod.length);
        expect(building.id).toEqual(10);
    }); 

    it('should be able to create a building from data according to its template even when template has empty levels', 
    ()=>{
        // given 
        const facade = setup() as Facade;
        const factory = facade.getService(AppConst.BUILDING_FACTORY) as IFactory;

        // when 
        const tpl = mock.TEMPLATE_BUILDINGS_MOCK[3];
        const building = factory.fromData({tplID: tpl.id, id:11});

        // then 
        expect(building).not.toBeNull();
        expect(building.name).toEqual(tpl.name);
        expect(building.tplBuildingID).toEqual(tpl.id);
        expect(building.level).toBeNull();
        expect(building.id).toEqual(11);
    }); 

    it('should provide a unique building id if it is not provided or it has a negative value', 
    ()=>{
        // given 
        const facade = setup() as Facade;
        const factory = facade.getService(AppConst.BUILDING_FACTORY) as IFactory;

        // when 
        const tpl = mock.TEMPLATE_BUILDINGS_MOCK[3];
        const building1 = factory.fromData({tplID: tpl.id, id:-1});
        const building2 = factory.fromData({tplID: tpl.id});
        const building3 = factory.fromData({tplID: tpl.id, id:4});
        const building4 = factory.fromData({tplID: tpl.id});
        const building5 = factory.fromData({tplID: tpl.id, id:10});
        const building6 = factory.fromData({tplID: tpl.id});
        const building7 = factory.fromData({tplID: tpl.id, id: 4});

        // then 
        expect(building1.id).toEqual(1);
        expect(building2.id).toEqual(2);
        expect(building3.id).toEqual(4);
        expect(building4.id).toEqual(5);
        expect(building5.id).toEqual(10);
        expect(building6.id).toEqual(11);
        expect(building7.id).toEqual(12);
    });
})