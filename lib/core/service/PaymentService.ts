import QuantityList from "../model/schema/resources/QuantityList";
import IPaymentService from "./IPaymentService";

export default class PaymentService implements IPaymentService{
    pay( payment:QuantityList, cost:QuantityList ):boolean{
        // checks if there is not enough ressources
        const pairs = [];
        for( let i = 0; i < cost.get().length; i++ ){
            const current = cost.get()[i];
            const corresponding = payment.get().find( q=>q.resourceID === current.resourceID) || null;
            if( corresponding === null || corresponding.amount < current.amount)
                return false;

            pairs.push( {cost:current, payment: corresponding});
        }

        pairs.forEach( 
            (current)=>{
                current.payment.amount -= current.cost.amount;
            }
        )

        return true;
    }
}