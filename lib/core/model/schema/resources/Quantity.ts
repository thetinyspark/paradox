export default class Quantity{
    constructor(
        public resourceID:number = -1,
        private _amount:number = 0,
        private _min:number = 0,
        private _max:number = Infinity,
    ){}

    public clone():Quantity{
        return new Quantity( this.resourceID, this.amount, this._min, this._max );
    }

    public get amount():number{
        return this._amount;
    }

    public set amount(value:number){
        this._amount = value < this._min ? this._min : value > this._max ? this._max : value;
    }

    public isFull():boolean{
        return this._amount >= this._max;
    }
}