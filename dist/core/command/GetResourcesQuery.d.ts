import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import Resource from "../model/schema/resources/Resource";
/**
 * Returns all resources
 *
 * example.ts
 * ```typescript
 * Paradox.engine.getFacade().query(Paradox.appConstants.GET_RESOURCES_QUERY).then( (resources)=>{});
 * ```
 */
export default class GetResourcesQuery implements ICommand {
    execute(notification: INotification): Resource[];
}
