import { CityBuildingDescType } from "./CityBuildingDescType"
import { QuantityDescType } from "./QuantityDescType"

export type CityDescType = {
    id: number, 
    name: string, 
    buildings:CityBuildingDescType[],
    wallet: QuantityDescType[]
}