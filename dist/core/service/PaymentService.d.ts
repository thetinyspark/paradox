import QuantityList from "../model/schema/resources/QuantityList";
import IPaymentService from "./IPaymentService";
export default class PaymentService implements IPaymentService {
    pay(payment: QuantityList, cost: QuantityList): boolean;
}
