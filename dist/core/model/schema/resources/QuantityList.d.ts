import Quantity from "./Quantity";
export default class QuantityList {
    private _quantities;
    constructor(quantities: Quantity[]);
    set(quantities: Quantity[]): void;
    get(): Quantity[];
    clone(): QuantityList;
}
