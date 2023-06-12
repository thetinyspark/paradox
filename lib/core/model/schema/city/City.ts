import Building from "../building/Building";
import QuantityList from "../resources/QuantityList";

export default class City{
    constructor(
        public id:number = -1, 
        public name:string = "",
        public buildings:Building[] = [],
        public wallet:QuantityList = new QuantityList([])
    ){}
}