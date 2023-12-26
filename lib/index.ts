import { Container } from "@thetinyspark/coffe-maker";
import Engine from "./core/Engine";
import AppConst from "./core/ioc/app.const";

const defaultContainer = new Container();
const engine = new Engine();
const paradoxConstants = AppConst;

export = {
    engine, 
    defaultContainer, 
    paradoxConstants
};