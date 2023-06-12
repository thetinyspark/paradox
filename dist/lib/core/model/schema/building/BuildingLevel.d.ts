import QuantityList from "../resources/QuantityList";
export default class BuildingLevel {
    level: number;
    cost: QuantityList;
    prod: QuantityList;
    cons: QuantityList;
    sold: QuantityList;
    constructor(level?: number, cost?: QuantityList, prod?: QuantityList, cons?: QuantityList, sold?: QuantityList);
    clone(): BuildingLevel;
}
