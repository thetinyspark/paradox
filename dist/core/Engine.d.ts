import { Container, Facade } from "@thetinyspark/coffe-maker";
import { Emitter } from "@thetinyspark/tiny-observer";
export default class Engine extends Emitter {
    private _facade;
    constructor();
    init(container: Container, configuration?: any): void;
    getVersion(): string;
    getFacade(): Facade;
}
