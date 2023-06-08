import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import City from "../model/schema/city/City";
/**
 * Returns all the cities
 *
 * example.ts
 * ```typescript
 * Paradox.engine.getFacade().query(Paradox.appConstants.GET_CITIES_QUERY).then( (cities)=>{});
 * ```
 */
export default class GetCitiesQuery implements ICommand {
    execute(notification: INotification): City[];
}
