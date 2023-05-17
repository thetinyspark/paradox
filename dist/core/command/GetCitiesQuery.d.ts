import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import City from "../model/schema/city/City";
export default class GetCitiesQuery implements ICommand {
    execute(notification: INotification): City[];
}
