"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PaymentService = /** @class */ (function () {
    function PaymentService() {
    }
    PaymentService.prototype.pay = function (payment, cost) {
        // checks if there is not enough ressources
        var pairs = [];
        var _loop_1 = function (i) {
            var current = cost.get()[i];
            var corresponding = payment.get().find(function (q) { return q.resourceID === current.resourceID; }) || null;
            if (corresponding === null || corresponding.amount < current.amount)
                return { value: false };
            pairs.push({ cost: current, payment: corresponding });
        };
        for (var i = 0; i < cost.get().length; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        pairs.forEach(function (current) {
            current.payment.amount -= current.cost.amount;
        });
        return true;
    };
    return PaymentService;
}());
exports.default = PaymentService;
