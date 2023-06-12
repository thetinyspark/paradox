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
        id: 2, 
        name: "Atlantis", 
        buildings:[{tplID:1, level:2}],
        wallet: [{resourceID: 1, amount: 1000},{resourceID: 2, amount: 1000}]
    }
};

export const RESOURCES_MOCK:ResourceDescType[] = [
    {id:1, name: "gold"},
    {id:2, name: "wood"},
    {id:3, name: "food"},
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
            {level: 1, cost: [{resourceID: 1, amount: 100}], prod: [{resourceID: 2, amount: 100}], cons:[{resourceID: 2, amount: 2}], sold:[{resourceID: 1, amount: 50}]},
            {level: 2, cost: [{resourceID: 1, amount: 200}], prod: [{resourceID: 2, amount: 200}], cons:[], sold:[]},
        ]
    },
    {
        id: 2, 
        name: "Cabin", 
        levels: [
            {level: 1, cost: [{resourceID: 2, amount: 300}], prod: [{resourceID: 2, amount: 300}], cons:[], sold:[]},
            {level: 2, cost: [{resourceID: 2, amount: 400}], prod: [{resourceID: 2, amount: 400}], cons:[], sold:[]},
        ]
    },
    {
        id: 3, 
        name: "Academy", 
        levels: [
            {level: 1, cost: [{resourceID: 3, amount: 100}], prod: [], cons:[], sold:[]},
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
            {level: 1, cost: [], prod: [], cons:[{resourceID: 2, amount: 1}], sold:[]},
        ]
    },
];

export const SAVED_DATA:GameSaveDescType = {
    cities: [SHANGRILA()], 
    resources: RESOURCES_MOCK, 
    templateBuildings: TEMPLATE_BUILDINGS_MOCK
}

