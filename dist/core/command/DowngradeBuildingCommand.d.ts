import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
/**
 * Downgrades a building with a specific id (it if exists) by a certain minus
 * Removes building if minus is too strong
 *
 * example.ts
 * ```typescript
 * const data = {cityID: 1, id:1, minus: 1};
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.DOWNGRADE_BUILDING, data);
 * ```
 */
export default class DowngradeBuildingCommand implements ICommand {
    execute(notification: INotification): boolean;
}
