import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import City from "../model/schema/city/City";
/**
 * Returns a city by its id if exists
 *
 * example.ts
 * ```typescript
 * Paradox.engine.getFacade().query(Paradox.appConstants.GET_CITY_QUERY, {id:1}).then( (city)=>{});
 * ```
 */
export default class GetCityQuery implements ICommand {
    execute(notification: INotification): City;
}
