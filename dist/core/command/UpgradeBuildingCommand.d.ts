import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
/**
 * Upgrades a building with a specific id (it if exists)
 *
 * example.ts
 * ```typescript
 * const data = {cityID: 1, id:1};
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.UPGRADE_BUILDING, data);
 * ```
 */
export default class UpgradeBuildingCommand implements ICommand {
    execute(notification: INotification): boolean;
}
