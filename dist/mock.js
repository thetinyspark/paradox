"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEMPLATE_BUILDINGS_MOCK = exports.QUANTITIES_MOCK = exports.RESOURCES_MOCK = exports.SHANGRILA = exports.ATLANTIS = exports.YS = void 0;
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
        buildings: [{ tplID: 1, level: 2 }],
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
            { level: 1, cost: [{ resourceID: 1, amount: 100 }], prod: [{ resourceID: 2, amount: 100 }] },
            { level: 2, cost: [{ resourceID: 1, amount: 200 }], prod: [{ resourceID: 2, amount: 200 }] },
        ]
    },
    {
        id: 2,
        name: "Cabin",
        levels: [
            { level: 1, cost: [{ resourceID: 2, amount: 300 }], prod: [{ resourceID: 2, amount: 300 }] },
            { level: 2, cost: [{ resourceID: 2, amount: 400 }], prod: [{ resourceID: 2, amount: 400 }] },
        ]
    },
    {
        id: 3,
        name: "Academy",
        levels: [
            { level: 1, cost: [{ resourceID: 3, amount: 100 }], prod: [] },
        ]
    },
    {
        id: 4,
        name: "Home",
        levels: []
    },
];
