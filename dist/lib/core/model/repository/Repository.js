"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coffe_maker_1 = require("@thetinyspark/coffe-maker");
class Repository extends coffe_maker_1.Proxy {
    constructor(_state, _key) {
        super();
        this._state = _state;
        this._key = _key;
        this.reset();
    }
    reset() {
        const save = {};
        save[this._key] = new Array();
        this._state.setState(save);
    }
    add(obj) {
        const data = this.getAll();
        data.push(obj);
        const save = {};
        save[this._key] = data;
        this._state.setState(save);
    }
    remove(obj) {
        const data = this.getAll();
        data.splice(data.indexOf(obj), 1);
        const save = {};
        save[this._key] = data;
        this._state.setState(save);
    }
    getAllBy(critera, value) {
        return this.getAll().filter((current) => {
            return current[critera] === value;
        });
    }
    getOneBy(critera, value) {
        return this.getAll().find((current) => {
            return current[critera] === value;
        }) || null;
    }
    getAll() {
        return this._state.getState()[this._key];
    }
}
exports.default = Repository;
