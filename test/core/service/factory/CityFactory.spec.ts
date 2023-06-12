import { Facade } from "@thetinyspark/coffe-maker";
import * as mock from "../../../mock.spec";
import AppConst from "../../../../lib/core/ioc/app.const";
import IFactory from "../../../../lib/core/service/factory/IFactory";
import Building from "../../../../lib/core/model/schema/building/Building";
import { setup } from "../../../setup.spec";

describe('CityFactory test suite', 
()=>{
    it('should be able to create a building from data according to its template (and add ids on buildings according to their position)', 
    ()=>{
        // given 
        const facade = setup() as Facade;
        const factory = facade.getService(AppConst.CITY_FACTORY) as IFactory;
        const data = mock.ATLANTIS();
        const buildings:any[] = data.buildings as any[];
        buildings.push( 
            ...mock.TEMPLATE_BUILDINGS_MOCK.map(
                (data,index) => {
                    return {tplID: data.id};
                }
            )
        );

        // when 
        const city = factory.fromData(data);

        // then 
        expect(city).not.toBeNull();
        expect(city.id).toEqual(data.id);
        expect(city.name).toEqual(data.name);
        expect(city.buildings.length).toEqual(data.buildings.length);
        expect(city.wallet.get().length).toEqual(data.wallet.length);

        
        city.wallet.get().forEach( 
            (quantity,index)=>{
                expect(data.wallet[index].resourceID).toEqual(quantity.resourceID);
                expect(data.wallet[index].amount).toEqual(quantity.amount);
            }
        ); 

        city.buildings.forEach( 
            (building:Building,index:number)=>{
                const currentData = mock.TEMPLATE_BUILDINGS_MOCK[index];
                if( currentData.levels.length > 0 && building.level){
                    const first = currentData.levels[0];
                    expect(building.level.prod.get().length).toEqual(first.prod.length);
                    expect(building.level.cost.get().length).toEqual(first.cost.length);
                    expect(building.level.level).toEqual(first.level);
                    expect(building.id).toEqual(index+1);
                }
                expect(building.name).toEqual(currentData.name);
                expect(building.tplBuildingID).toEqual(currentData.id);
            }
        )
        
    }); 
})