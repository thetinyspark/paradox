import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
/**
 * Processes a cycle. A cycle means that productions are added
 * to cities's wallets and consumptions are removed from them too.
 *
 * example.ts
 * ```typescript
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.DO_CYCLE);
 * ```
 */
export default class DoCycleCommand implements ICommand {
    execute(notification: INotification): void;
}
