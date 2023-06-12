import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
/**
 * Removes city
 *
 * example.ts
 * ```typescript
 * const data = {id:1};
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.REMOVE_CITY, data)
 * ```
 */
export default class RemoveCityCommand implements ICommand {
    execute(notification: INotification): void;
}
