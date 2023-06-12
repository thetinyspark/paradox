import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
/**
 * Sets a building frozen status
 * If a building is frozen it doesnot produce nor consume anything
 *
 * example.ts
 * ```typescript
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.SET_BUILDING_FROZEN_STATUS, {id:1, cityID:1, frozen:true});
 * ```
 */
export default class SetBuildingFrozenStatusCommand implements ICommand {
    execute(notification: INotification): void;
}
