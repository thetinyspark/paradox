import { CityDescType } from "./CityDescType";
import { ResourceDescType } from "./ResourceDescType";
import { TemplateBuildingDescType } from "./TemplateBuildingDescType";

export type GameSaveDescType = {
    cities?: CityDescType[], 
    resources?: ResourceDescType[], 
    templateBuildings?: TemplateBuildingDescType[]
};