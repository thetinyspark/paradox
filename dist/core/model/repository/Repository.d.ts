import { Model, Proxy } from "@thetinyspark/coffe-maker";
export default class Repository<T> extends Proxy {
    private _state;
    private _key;
    constructor(storeModel?: Model, key?: string);
    reset(): void;
    add(obj: T): void;
    remove(obj: T): void;
    getAllBy(critera: string, value: any): T[];
    getOneBy(critera: string, value: any): T;
    getAll(): T[];
}
