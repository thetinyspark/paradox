import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import TemplateBuilding from "../model/schema/building/TemplateBuilding";
/**
 * Returns all building's templates
 *
 * example.ts
 * ```typescript
 * Paradox.engine.getFacade().query(Paradox.appConstants.GET_TEMPLATES_BUILDINGS_QUERY).then( (templates)=>{});
 * ```
 */
export default class GetTemplateBuildingsQuery implements ICommand {
    execute(notification: INotification): TemplateBuilding[];
}
