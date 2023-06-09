import { BuildingLevelDescType } from "./BuildingLevelDescType";

export type TemplateBuildingDescType = {
    id: number, 
    name: string, 
    levels: BuildingLevelDescType[]
};