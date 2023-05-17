export default class Quantity {
    resourceID: number;
    amount: number;
    constructor(resourceID?: number, amount?: number);
    clone(): Quantity;
}
