import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
/**
 * Adds city
 *
 * example.ts
 * ```typescript
 * const cityData = {
        id: 1,
        name: "Atlantis",
        buildings:[{tplID:1, level:2}],
        wallet: [{resourceID: 1, amount: 100}]
    };
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.ADD_CITY, cityData)
 * ```
 */
export default class AddCityCommand implements ICommand {
    execute(notification: INotification): void;
}
