import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
/**
 * Removes a building with a specific id from a city (it if exists)
 *
 * example.ts
 * ```typescript
 * const data = {cityID: 1, id:1};
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.REMOVE_BUILDING_FROM_CITY, data);
 * ```
 */
export default class RemoveBuildingCommand implements ICommand {
    execute(notification: INotification): void;
}
