import QuantityList from "../model/schema/resources/QuantityList";

export default interface PaymentService{
    pay( payment:QuantityList, cost:QuantityList ):boolean;
}