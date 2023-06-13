import { Container } from "@thetinyspark/coffe-maker";
import Engine from "./core/Engine";

const defaultContainer = new Container();
const engine = new Engine();

export = {
    engine, 
    defaultContainer
};