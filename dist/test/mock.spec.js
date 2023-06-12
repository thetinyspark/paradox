"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SAVED_DATA = exports.TEMPLATE_BUILDINGS_MOCK = exports.QUANTITIES_MOCK = exports.RESOURCES_MOCK = exports.SHANGRILA = exports.ATLANTIS = exports.YS = void 0;
function YS() {
    return {
        id: 1,
        name: "Ys",
        buildings: [],
        wallet: []
    };
}
exports.YS = YS;
;
function ATLANTIS() {
    return {
        id: 2,
        name: "Atlantis",
        buildings: [],
        wallet: [{ resourceID: 1, amount: 1000 }, { resourceID: 2, amount: 1000 }]
    };
}
exports.ATLANTIS = ATLANTIS;
;
function SHANGRILA() {
    return {
        id: 2,
        name: "Atlantis",
        buildings: [{ tplID: 1, level: 2, id: 1, frozen: false }],
        wallet: [{ resourceID: 1, amount: 1000 }, { resourceID: 2, amount: 1000 }]
    };
}
exports.SHANGRILA = SHANGRILA;
;
exports.RESOURCES_MOCK = [
    { id: 1, name: "gold" },
    { id: 2, name: "wood" },
    { id: 3, name: "food" },
];
exports.QUANTITIES_MOCK = [
    { resourceID: 1, amount: 100 },
    { resourceID: 2, amount: 100 },
    { resourceID: 3, amount: 100 },
];
exports.TEMPLATE_BUILDINGS_MOCK = [
    {
        id: 1,
        name: "Castle",
        levels: [
            { level: 1, cost: [{ resourceID: 1, amount: 100 }], prod: [{ resourceID: 2, amount: 100 }], cons: [{ resourceID: 2, amount: 2 }], sold: [{ resourceID: 1, amount: 50 }] },
            { level: 2, cost: [{ resourceID: 1, amount: 200 }], prod: [{ resourceID: 2, amount: 200 }], cons: [], sold: [] },
        ]
    },
    {
        id: 2,
        name: "Cabin",
        levels: [
            { level: 1, cost: [{ resourceID: 2, amount: 300 }], prod: [{ resourceID: 2, amount: 300 }], cons: [], sold: [] },
            { level: 2, cost: [{ resourceID: 2, amount: 400 }], prod: [{ resourceID: 2, amount: 400 }], cons: [], sold: [] },
        ]
    },
    {
        id: 3,
        name: "Academy",
        levels: [
            { level: 1, cost: [{ resourceID: 3, amount: 100 }], prod: [], cons: [], sold: [] },
        ]
    },
    {
        id: 4,
        name: "Home",
        levels: []
    },
    {
        id: 5,
        name: "King",
        levels: [
            { level: 1, cost: [], prod: [], cons: [{ resourceID: 2, amount: 1 }], sold: [] },
        ]
    },
];
exports.SAVED_DATA = {
    cities: [SHANGRILA()],
    resources: exports.RESOURCES_MOCK,
    templateBuildings: exports.TEMPLATE_BUILDINGS_MOCK
};
