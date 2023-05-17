import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
export default class AddBuildingToCityCommand implements ICommand {
    execute(notification: INotification): void;
}
