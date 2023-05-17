import PaymentService from "../../../lib/core/service/PaymentService";
import { setup } from "../../setup.spec";
import { Facade } from "@thetinyspark/coffe-maker";
import AppConst from "../../../lib/core/ioc/app.const";
import IFactory from "../../../lib/core/service/factory/IFactory";

describe("PaymentService test suite", () => {
  it("should be able to create a building from data according to its template", () => {
    // given
    const facade = setup() as Facade;
    const payment = facade.getService(AppConst.PAYMENT_SERVICE) as PaymentService;
    const factory = facade.getService(AppConst.QUANTITY_LIST_FACTORY) as IFactory;
    const data = [
      {
        cost:     [{resourceID: 1, amount: 200} , {resourceID: 2, amount: 100}],
        payment:  [{resourceID: 1, amount: 200} , {resourceID: 2, amount: 100}],
        remains:  [{resourceID: 1, amount: 0}   , {resourceID: 2, amount: 0}],
        result: true
      },
      {
        cost:     [{resourceID: 1, amount: 200}, {resourceID: 2, amount: 100}],
        payment:  [{resourceID: 1, amount: 180}, {resourceID: 2, amount: 100}],
        remains:  [{resourceID: 1, amount: 180}, {resourceID: 2, amount: 100}],
        result: false
      },
      {
        cost:     [{resourceID: 1, amount: 200}, {resourceID: 2, amount: 100}],
        payment:  [{resourceID: 1, amount: 280}, {resourceID: 2, amount: 120}],
        remains:  [{resourceID: 1, amount: 80}, {resourceID: 2, amount: 20}],
        result: true
      },

    ];
    // when
    const results = data.map( 
      (current)=> {
        const pay = factory.fromData(current.payment);
        const cost = factory.fromData(current.cost)
        const result = payment.pay(pay,cost);
        const remains = pay.get().map( q => {
          return {resourceID: q.resourceID, amount: q.amount}
        }); 

        return {
          result ,
          remains
        }
      }
    );
    const expected = data.map( current => {
      return { remains: current.remains, result: current.result}
    })

    // then
    expect(results).toEqual(expected);
  });
});
