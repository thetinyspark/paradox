import BuildingLevel from "./BuildingLevel";
export default class Building {
    name: string;
    level: BuildingLevel;
    tplBuildingID: number;
    id: number;
    constructor(name?: string, level?: BuildingLevel, tplBuildingID?: number, id?: number);
    clone(): Building;
}
