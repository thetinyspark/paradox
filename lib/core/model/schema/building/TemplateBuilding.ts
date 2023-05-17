import BuildingLevel from "./BuildingLevel";

export default class TemplateBuilding{

    constructor(
        public id:number = -1,
        public name:string = "",
        public levels:BuildingLevel[] = [], 
    ){}

    public clone():TemplateBuilding{
        return new TemplateBuilding(this.id, this.name, this.levels.map( l => l.clone()));
    }
}