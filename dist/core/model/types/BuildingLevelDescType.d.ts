import { QuantityDescType } from "./QuantityDescType";
export declare type BuildingLevelDescType = {
    level: number;
    cost: QuantityDescType[];
    prod: QuantityDescType[];
    cons: QuantityDescType[];
    sold: QuantityDescType[];
};
