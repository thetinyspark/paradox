import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
import TemplateBuilding from "../model/schema/building/TemplateBuilding";
export default class GetTemplateBuildingsQuery implements ICommand {
    execute(notification: INotification): TemplateBuilding[];
}
