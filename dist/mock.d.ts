export declare function YS(): {
    id: number;
    name: string;
    buildings: any[];
    wallet: any[];
};
export declare function ATLANTIS(): {
    id: number;
    name: string;
    buildings: any[];
    wallet: {
        resourceID: number;
        amount: number;
    }[];
};
export declare function SHANGRILA(): {
    id: number;
    name: string;
    buildings: {
        tplID: number;
        level: number;
    }[];
    wallet: {
        resourceID: number;
        amount: number;
    }[];
};
export declare const RESOURCES_MOCK: {
    id: number;
    name: string;
}[];
export declare const QUANTITIES_MOCK: {
    resourceID: number;
    amount: number;
}[];
export declare const TEMPLATE_BUILDINGS_MOCK: {
    id: number;
    name: string;
    levels: {
        level: number;
        cost: {
            resourceID: number;
            amount: number;
        }[];
        prod: {
            resourceID: number;
            amount: number;
        }[];
        cons: {
            resourceID: number;
            amount: number;
        }[];
        sold: {
            resourceID: number;
            amount: number;
        }[];
    }[];
}[];
export declare const SAVED_DATA: {
    cities: {
        id: number;
        name: string;
        buildings: {
            tplID: number;
            level: number;
        }[];
        wallet: {
            resourceID: number;
            amount: number;
        }[];
    }[];
    resources: {
        id: number;
        name: string;
    }[];
    templateBuildings: {
        id: number;
        name: string;
        levels: {
            level: number;
            cost: {
                resourceID: number;
                amount: number;
            }[];
            prod: {
                resourceID: number;
                amount: number;
            }[];
            cons: {
                resourceID: number;
                amount: number;
            }[];
            sold: {
                resourceID: number;
                amount: number;
            }[];
        }[];
    }[];
};
