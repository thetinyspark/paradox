import { Container, Facade} from "@thetinyspark/coffe-maker";
import { Emitter } from "@thetinyspark/tiny-observer";
import AppConst from "./ioc/app.const";
import { configFacade } from "./ioc/config";

export default class Engine extends Emitter{
    private _facade:Facade = null; 

    constructor(){
        super();
    }

    init(container:Container, configuration:any = {}){
        configFacade(container);
        this._facade = container.resolve(AppConst.APP_FACADE) as Facade;

        // init resources and buildings
        this._facade.sendNotification(AppConst.RESTORE_SAVED_DATA, configuration);
    }

    getFacade(){
        return this._facade;
    }
}