import QuantityList from "../resources/QuantityList";
export default class BuildingLevel {
    level: number;
    cost: QuantityList;
    prod: QuantityList;
    constructor(level?: number, cost?: QuantityList, prod?: QuantityList);
    clone(): BuildingLevel;
}
