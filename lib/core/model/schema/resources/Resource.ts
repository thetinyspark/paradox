export default class Resource{
    constructor(
        public id:number = -1,
        public name:string = "",
        public min:number = 0, 
        public max:number = Infinity
    ){}       
}