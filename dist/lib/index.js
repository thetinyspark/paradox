"use strict";
const coffe_maker_1 = require("@thetinyspark/coffe-maker");
const config_1 = require("./core/ioc/config");
const Engine_1 = require("./core/Engine");
const app_const_1 = require("./core/ioc/app.const");
const defaultContainer = (0, config_1.configIOC)(new coffe_maker_1.Container());
const engine = new Engine_1.default();
module.exports = {
    engine,
    defaultContainer,
    appConstants: app_const_1.default
};
