"use strict";
var coffe_maker_1 = require("@thetinyspark/coffe-maker");
var config_1 = require("./core/ioc/config");
var Engine_1 = require("./core/Engine");
var app_const_1 = require("./core/ioc/app.const");
var defaultContainer = (0, config_1.configIOC)(new coffe_maker_1.Container());
var engine = new Engine_1.default();
module.exports = {
    engine: engine,
    defaultContainer: defaultContainer,
    appConstants: app_const_1.default
};
