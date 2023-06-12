import BuildingLevel from "./BuildingLevel";

export default class Building{
    constructor(
        public name:string = "",
        public level:BuildingLevel = null, 
        public tplBuildingID:number = -1,
        public id:number = -1,
        public frozen:boolean= false
    ){}

    public clone():Building{
        return new Building(this.name, this.level.clone(), this.tplBuildingID, this.id, this.frozen);
    }
}