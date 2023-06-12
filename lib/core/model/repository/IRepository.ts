import { IProxy } from "@thetinyspark/coffe-maker";

export default interface IRepository<T> extends IProxy{
    reset();
    add(obj:T):void;
    remove(obj:T):void;
    getAllBy(critera:string, value:any):T[];
    getOneBy(critera:string, value:any):T;
    getAll():T[];
}