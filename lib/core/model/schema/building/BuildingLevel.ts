import QuantityList from "../resources/QuantityList";

export default class BuildingLevel{
    constructor(
        public level:number = 0,
        public cost:QuantityList = new QuantityList([]),
        public prod:QuantityList = new QuantityList([]), 
        public cons:QuantityList = new QuantityList([]), 
    ){}

    public clone():BuildingLevel{
        return new BuildingLevel(this.level, this.cost.clone(), this.prod.clone(), this.cons.clone());
    }
}