import Building from "../building/Building";
import QuantityList from "../resources/QuantityList";
export default class City {
    id: number;
    name: string;
    buildings: Building[];
    wallet: QuantityList;
    constructor(id?: number, name?: string, buildings?: Building[], wallet?: QuantityList);
}
