import { QuantityDescType } from "./QuantityDescType";

export type BuildingLevelDescType = {
    level: number, 
    cost: QuantityDescType[], 
    prod: QuantityDescType[], 
    cons: QuantityDescType[], 
    sold: QuantityDescType[]
};