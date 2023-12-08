export default class Quantity {
    resourceID: number;
    private _amount;
    private _min;
    private _max;
    constructor(resourceID?: number, _amount?: number, _min?: number, _max?: number);
    clone(): Quantity;
    get amount(): number;
    set amount(value: number);
    isFull(): boolean;
}
