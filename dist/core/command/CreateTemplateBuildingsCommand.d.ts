import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
/**
 * Create building's templates
 *
 * example.ts
 * ```typescript
 * const templates = [
    {
        id: 1,
        name: "Castle",
        levels: [
            {level: 1, cost: [{resourceID: 1, amount: 100}], prod: [{resourceID: 2, amount: 100}], cons:[{resourceID: 2, amount: 2}], sold:[{resourceID: 1, amount: 50}]},
            {level: 2, cost: [{resourceID: 1, amount: 200}], prod: [{resourceID: 2, amount: 200}], cons:[], sold:[]},
        ]
    },
    {
        id: 2,
        name: "Home",
        levels: []
    },
];
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.CREATE_TEMPLATE_BUILDINGS, templates);
 * ```
 */
export default class CreateTemplateBuildingsCommand implements ICommand {
    execute(notification: INotification): void;
}
