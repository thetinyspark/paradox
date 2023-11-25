import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
/**
 * Buys and adds a building to a city if city has enough resources
 *
 * example.ts
 * ```typescript
 * const data = {cityID: 1, tplID: 1};
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.BUY_BUILDING, data);
 * ```
 */
export default class BuyBuildingCommand implements ICommand {
    execute(notification: INotification): boolean;
}
