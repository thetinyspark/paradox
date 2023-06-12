"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaymentService {
    pay(payment, cost) {
        // checks if there is not enough ressources
        const pairs = [];
        for (let i = 0; i < cost.get().length; i++) {
            const current = cost.get()[i];
            const corresponding = payment.get().find(q => q.resourceID === current.resourceID) || null;
            if (corresponding === null || corresponding.amount < current.amount)
                return false;
            pairs.push({ cost: current, payment: corresponding });
        }
        pairs.forEach((current) => {
            current.payment.amount -= current.cost.amount;
        });
        return true;
    }
}
exports.default = PaymentService;
