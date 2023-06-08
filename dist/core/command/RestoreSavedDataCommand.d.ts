import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
/**
 * Restores game data
 *
 * example.ts
 * ```typescript
 * const cities             = [... cities data];
 * const resources          = [... resources data];
 * const templateBuildings  = [... templates data];
 * const data =  {cities resources, templateBuildings};
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.RESTORE_SAVED_DATA, data);
 * ```
 */
export default class RestoreSavedDataCommand implements ICommand {
    execute(notification: INotification): void;
}
