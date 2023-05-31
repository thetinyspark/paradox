import QuantityList from "../resources/QuantityList";
export default class BuildingLevel {
    level: number;
    cost: QuantityList;
    prod: QuantityList;
    cons: QuantityList;
    constructor(level?: number, cost?: QuantityList, prod?: QuantityList, cons?: QuantityList);
    clone(): BuildingLevel;
}
