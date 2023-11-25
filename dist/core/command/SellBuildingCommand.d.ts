import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
/**
 * Sells a building with a specific id and remove it from a city (it if exists)
 *
 * example.ts
 * ```typescript
 * const data = {cityID:1, id:1};
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.SELL_BUILDING, data);
 * ```
 */
export default class SellBuildingCommand implements ICommand {
    execute(notification: INotification): Promise<boolean>;
}
