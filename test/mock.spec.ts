import { CityDescType } from "../lib/core/model/types/CityDescType";
import { GameSaveDescType } from "../lib/core/model/types/GameSaveDescType";
import { QuantityDescType } from "../lib/core/model/types/QuantityDescType";
import { ResourceDescType } from "../lib/core/model/types/ResourceDescType";
import { TemplateBuildingDescType } from "../lib/core/model/types/TemplateBuildingDescType";

export function YS():CityDescType{
    return {
        id: 1, 
        name: "Ys", 
        buildings:[],
        wallet: []
    }
};

export function ATLANTIS():CityDescType{
    return{
        id: 2, 
        name: "Atlantis", 
        buildings:[],
        wallet: [{resourceID: 1, amount: 1000},{resourceID: 2, amount: 1000}]
    }
};

export function SHANGRILA():CityDescType{
    return{
        id: 3, 
        name: "Atlantis", 
        buildings:[{tplID:1, level:2, id:1, frozen:false}],
        wallet: [{resourceID: 1, amount: 1000},{resourceID: 2, amount: 1000}]
    }
};

export const RESOURCES_MOCK:ResourceDescType[] = [
    {id:1, name: "gold", min: 0, max:2000},
    {id:2, name: "wood", min: 0, max:2000},
    {id:3, name: "food", min: 0, max:2000},
];

export const QUANTITIES_MOCK:QuantityDescType[] = [
    {resourceID: 1, amount: 100},
    {resourceID: 2, amount: 100},
    {resourceID: 3, amount: 100},
];

export const TEMPLATE_BUILDINGS_MOCK:TemplateBuildingDescType[] = [
    {
        id: 1, 
        name: "Castle", 
        levels: [
            {prodFrequency: 1, level: 1, cost: [{resourceID: 1, amount: 100}], prod: [{resourceID: 2, amount: 100}], cons:[{resourceID: 2, amount: 2}], sold:[{resourceID: 1, amount: 50}]},
            {prodFrequency: 1, level: 2, cost: [{resourceID: 1, amount: 200}], prod: [{resourceID: 2, amount: 200}], cons:[], sold:[]},
        ]
    },
    {
        id: 2, 
        name: "Cabin", 
        levels: [
            {prodFrequency: 1, level: 1, cost: [{resourceID: 2, amount: 300}], prod: [{resourceID: 2, amount: 300}], cons:[], sold:[]},
            {prodFrequency: 1, level: 2, cost: [{resourceID: 2, amount: 400}], prod: [{resourceID: 2, amount: 400}], cons:[], sold:[]},
        ]
    },
    {
        id: 3, 
        name: "Academy", 
        levels: [
            {prodFrequency: 1, level: 1, cost: [{resourceID: 3, amount: 100}], prod: [], cons:[], sold:[]},
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
            {prodFrequency: 1, level: 1, cost: [], prod: [], cons:[{resourceID: 2, amount: 1}], sold:[]},
        ]
    },
    {
        id: 6, 
        name: "test1", 
        levels: [
            {prodFrequency: 1, level: 1, cost: [], prod: [{resourceID: 2, amount: 100}], cons:[{resourceID: 2, amount: 2}], sold:[]},
        ]
    },
    {
        id: 7, 
        name: "test2", 
        levels: [
            {
                level: 1, 
                cost: [], 
                prod: [{resourceID: 1, amount: 1}], 
                cons:[{resourceID: 1, amount: 2}], 
                sold:[], 
                prodFrequency: 1
            },
        ]
    },
    {
        id: 8, 
        name: "test3", 
        levels: [
            {
                level: 1, 
                cost: [], 
                prod: [{resourceID: 1, amount: 100}], 
                cons:[], 
                sold:[], 
                prodFrequency: 2
            },
        ]
    },
    {
        id: 9, 
        name: "test4", 
        levels: [
            {
                level: 1, 
                cost: [], 
                prod: [{resourceID: 1, amount: 100}], 
                cons: [{resourceID: 2, amount: 100}], 
                sold:[], 
                prodFrequency: 1
            },
        ]
    },
];

export const SAVED_DATA:GameSaveDescType = {
    cities: [SHANGRILA()], 
    resources: RESOURCES_MOCK, 
    templateBuildings: TEMPLATE_BUILDINGS_MOCK
}

