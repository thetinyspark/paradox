import { CityBuildingDescType } from "./CityBuildingDescType";
import { QuantityDescType } from "./QuantityDescType";
export declare type CityDescType = {
    id: number;
    name: string;
    buildings: CityBuildingDescType[];
    wallet: QuantityDescType[];
};
