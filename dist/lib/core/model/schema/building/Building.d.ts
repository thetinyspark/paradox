import BuildingLevel from "./BuildingLevel";
export default class Building {
    name: string;
    level: BuildingLevel;
    tplBuildingID: number;
    id: number;
    frozen: boolean;
    constructor(name?: string, level?: BuildingLevel, tplBuildingID?: number, id?: number, frozen?: boolean);
    clone(): Building;
}
