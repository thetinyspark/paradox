"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
                if (building.level === null)
                    return;
                building.level.prod.get().forEach((prod) => {
                    const cityQuantity = city.wallet.get().find(q => q.resourceID === prod.resourceID) || null;
                    if (cityQuantity === null) {
                        city.wallet.set([
                            ...city.wallet.get(),
                            prod.clone()
                        ]);
                    }
                    else {
                        cityQuantity.amount += prod.amount;
                    }
                });
            });
            // maintenance
            city.buildings.forEach((building) => {
                if (building.level === null)
                    return;
                building.level.cons.get().forEach((cons) => {
                    const cityQuantity = city.wallet.get().find(q => q.resourceID === cons.resourceID) || null;
                    if (cityQuantity === null) {
                        const empty = cons.clone();
                        empty.amount = 0;
                        city.wallet.set([...city.wallet.get(), empty]);
                    }
                    cityQuantity.amount -= cons.amount;
                });
            });
        });
    }
}
exports.default = DoCycleCommand;
