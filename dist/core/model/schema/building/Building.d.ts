import BuildingLevel from "./BuildingLevel";
export default class Building {
    name: string;
    level: BuildingLevel;
    tplBuildingID: number;
    constructor(name?: string, level?: BuildingLevel, tplBuildingID?: number);
    clone(): Building;
}
