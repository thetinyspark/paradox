import QuantityList from "../resources/QuantityList";

export default class BuildingLevel{
    constructor(
        public level:number = 0,
        public cost:QuantityList = new QuantityList([]),
        public prod:QuantityList = new QuantityList([]), 
        public cons:QuantityList = new QuantityList([]), 
        public sold:QuantityList = new QuantityList([]), 
        public prodFrequency:number = 1,
        public cycleCounter:number = 0
    ){}

    public clone():BuildingLevel{
        return new BuildingLevel(
            this.level, 
            this.cost.clone(), 
            this.prod.clone(), 
            this.cons.clone(), 
            this.sold.clone(),
            this.prodFrequency
        );
    }
}