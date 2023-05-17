export default class Quantity{
    constructor(
        public resourceID:number = -1,
        public amount:number = 0,
    ){}

    public clone():Quantity{
        return new Quantity( this.resourceID, this.amount );
    }
}