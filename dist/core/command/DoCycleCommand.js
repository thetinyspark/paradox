"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Quantity_1 = require("../model/schema/resources/Quantity");
const app_const_1 = require("../ioc/app.const");
/**
 * Processes a cycle. A cycle means that productions are added
 * to cities's wallets and consumptions are removed from them too.
 *
 * example.ts
 * ```typescript
 * Paradox.engine.getFacade().sendNotification(Paradox.appConstants.DO_CYCLE);
 * ```
 */
class DoCycleCommand {
    execute(notification) {
        const facade = notification.getEmitter();
        const proxy = facade.getProxy(app_const_1.default.CITY_REPOSITORY);
        proxy.getAll().forEach((city) => {
            // production
            city.buildings.forEach((building) => {
                if (building.level === null || building.frozen)
                    return;
                building.level.cycleCounter++;
                if (building.level.cycleCounter % building.level.prodFrequency !== 0)
                    return;
                const virtualWallet = city.wallet.clone();
                // production
                building.level.prod.get().forEach((prod) => {
                    const wallet = virtualWallet.get();
                    let pos = wallet.findIndex(q => q.resourceID === prod.resourceID);
                    if (pos < 0) {
                        wallet.push(new Quantity_1.default(prod.resourceID, 0));
                        pos = wallet.length - 1;
                    }
                    const cityQuantity = wallet[pos];
                    cityQuantity.amount += prod.amount;
                });
                // maintenance
                building.level.cons.get().forEach((cons) => {
                    const wallet = virtualWallet.get();
                    let pos = wallet.findIndex(q => q.resourceID === cons.resourceID);
                    if (pos < 0) {
                        wallet.push(new Quantity_1.default(cons.resourceID, 0));
                        pos = wallet.length - 1;
                    }
                    const cityQuantity = wallet[pos];
                    cityQuantity.amount -= cons.amount;
                });
                // if wallet is not in debt then clone it to city wallet; 
                const isInDebt = virtualWallet.get().filter((q) => q.amount < 0).length > 0;
                if (!isInDebt) {
                    city.wallet = virtualWallet.clone();
                }
            });
        });
    }
}
exports.default = DoCycleCommand;
