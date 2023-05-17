import { Container } from "@thetinyspark/coffe-maker";
import { configIOC } from "./core/ioc/config";
import Engine from "./core/Engine";
import AppConst from "./core/ioc/app.const";

const defaultContainer = configIOC(new Container());
const engine = new Engine();

module.exports = {
    engine, 
    defaultContainer,
    appConstants:AppConst
};