import { setup } from "../../setup.spec";
import { Facade } from "@thetinyspark/coffe-maker";
import AppConst from "../../../lib/core/ioc/app.const";
import IUIDService from "../../../lib/core/service/IUIDService";

describe("IUIDService test suite", () => {
  it("should be able to create an auto increment unique id for a specific category", () => {
    // given
    const facade = setup() as Facade;
    const service = facade.getService(AppConst.UID_SERVICE) as IUIDService;
  
    // when 
    const results:number[] = [
      service.createUID("buildings"),
      service.createUID("buildings",2000),
      service.createUID("buildings"),

      service.createUID("cities",2),
      service.createUID("cities",2),
      service.createUID("cities",3000),
      service.createUID("cities"),
    ];

    const expected = [1,2000,2001,2,3,3000,3001]

    expect(results).toEqual(expected);
  });
});
