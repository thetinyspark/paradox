import QuantityList from "../resources/QuantityList";
export default class BuildingLevel {
    level: number;
    cost: QuantityList;
    prod: QuantityList;
    cons: QuantityList;
    sold: QuantityList;
    prodFrequency: number;
    cycleCounter: number;
    constructor(level?: number, cost?: QuantityList, prod?: QuantityList, cons?: QuantityList, sold?: QuantityList, prodFrequency?: number, cycleCounter?: number);
    clone(): BuildingLevel;
}
