import BuildingLevel from "./BuildingLevel";
export default class TemplateBuilding {
    id: number;
    name: string;
    levels: BuildingLevel[];
    constructor(id?: number, name?: string, levels?: BuildingLevel[]);
    clone(): TemplateBuilding;
}
