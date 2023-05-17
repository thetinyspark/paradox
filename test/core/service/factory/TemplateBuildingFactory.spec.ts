import * as mock from "../../../../lib/mock";
import BuildingLevel from "../../../../lib/core/model/schema/building/BuildingLevel";
import TemplateBuilding from "../../../../lib/core/model/schema/building/TemplateBuilding";
import { setup } from "../../../setup.spec";
import { Facade } from "@thetinyspark/coffe-maker";
import AppConst from "../../../../lib/core/ioc/app.const";
import IFactory from "../../../../lib/core/service/factory/IFactory";

describe("TemplateBuildingFactory test suite", () => {
  it("should be able to create a building from data according to its template", () => {
    // given
    const facade = setup() as Facade;
    const factory = facade.getService(AppConst.TEMPLATE_BUILDING_FACTORY) as IFactory;
    const data = mock.TEMPLATE_BUILDINGS_MOCK;
    // when
    const templates = data.map((levelData) => factory.fromData(levelData));

    // then
    expect(templates.length).toEqual(data.length);
    templates.forEach(
      
        (tpl:TemplateBuilding, index:number)=>{
            expect(tpl).not.toBeNull();
            expect(tpl.id).toEqual(data[index].id);
            expect(tpl.name).toEqual(data[index].name);

            tpl.levels.forEach(
                (level: BuildingLevel, index2: number) => {
                    expect(level).not.toBeNull();
                    expect(level.cost.get().length).toEqual(data[index].levels[index2].cost.length);
                    expect(level.prod.get().length).toEqual(data[index].levels[index2].prod.length);
                    expect(level.level).toEqual(data[index].levels[index2].level);
                }
            )
        }
    );
  });
});
