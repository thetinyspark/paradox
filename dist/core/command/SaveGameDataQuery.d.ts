import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
export default class SaveGameDataQuery implements ICommand {
    execute(notification: INotification): string;
}
