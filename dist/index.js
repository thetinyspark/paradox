"use strict";
const coffe_maker_1 = require("@thetinyspark/coffe-maker");
const Engine_1 = require("./core/Engine");
const defaultContainer = new coffe_maker_1.Container();
const engine = new Engine_1.default();
module.exports = {
    engine,
    defaultContainer
};
