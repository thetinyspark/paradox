import { Container, Facade} from "@thetinyspark/coffe-maker";
import { Emitter } from "@thetinyspark/tiny-observer";
import AppConst from "./ioc/app.const";
import { configFacade } from "./ioc/config";
import { version } from "../version";
/**
 * The Engine object represents the main gateway between you and the paradox engine's core.
 */
export default class Engine extends Emitter{
    private _facade:Facade = null; 

    constructor(){
        super();
    }

    /**
     * Init the engine, and restores game data
     * @param container a Container's instance
     * @param configuration game data to restore
     */
    init(container:Container, configuration:any = {}){
        configFacade(container);
        this._facade = container.resolve(AppConst.APP_FACADE) as Facade;

        // init resources and buildings
        this._facade.sendNotification(AppConst.RESTORE_SAVED_DATA, configuration);
    }

    /**
     * Returns a version num
     * @returns string
     */
    getVersion(){
        return version;
    }

    /**
     * Returns the Facade which is used to dispatch commands and queries.
     * @returns Facade
     */
    getFacade(){
        return this._facade;
    }
}