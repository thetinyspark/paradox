import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
export default class BuyBuildingCommand implements ICommand {
    execute(notification: INotification): void;
}
