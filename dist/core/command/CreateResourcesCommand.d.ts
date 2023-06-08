import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
/**
 * Create resources
 *
 * example.ts
 * ```typescript
 * const resources = [{id:1, name: "gold"},{id:2, name: "wood"},{id:3, name: "food"}];
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.CREATE_RESOURCES, resources);
 * ```
 */
export default class CreateResourcesCommand implements ICommand {
    execute(notification: INotification): void;
}
