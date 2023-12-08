import { QuantityDescType } from "./QuantityDescType";

export type BuildingLevelDescType = {
    level: number, 
    prodFrequency?:number,
    cost: QuantityDescType[], 
    prod: QuantityDescType[], 
    cons: QuantityDescType[], 
    sold: QuantityDescType[]
};