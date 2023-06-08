import { ICommand } from "@thetinyspark/coffe-maker";
import { INotification } from "@thetinyspark/tiny-observer";
/**
 * Saves and returns all game data
 *
 * example.ts
 * ```typescript
 * Paradox.engine.getFacade().query(Paradox.appConstants.SAVE_GAME_DATA_QUERY).then( (gameData)=>{});
 * ```
 */
export default class SaveGameDataQuery implements ICommand {
    execute(notification: INotification): string;
}
