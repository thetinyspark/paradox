import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import Resource from "../model/schema/resources/Resource";
export default class GetResourcesQuery implements ICommand {
    execute(notification: INotification): Resource[];
}
