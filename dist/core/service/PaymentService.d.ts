import QuantityList from "../model/schema/resources/QuantityList";
export default class PaymentService {
    pay(payment: QuantityList, cost: QuantityList): boolean;
}
