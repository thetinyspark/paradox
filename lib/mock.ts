export function YS(){
    return {
        id: 1, 
        name: "Ys", 
        buildings:[],
        wallet: []
    }
};

export function ATLANTIS(){
    return{
        id: 2, 
        name: "Atlantis", 
        buildings:[],
        wallet: [{resourceID: 1, amount: 1000},{resourceID: 2, amount: 1000}]
    }
};

export function SHANGRILA(){
    return{
        id: 2, 
        name: "Atlantis", 
        buildings:[{tplID:1, level:2}],
        wallet: [{resourceID: 1, amount: 1000},{resourceID: 2, amount: 1000}]
    }
};

export const RESOURCES_MOCK = [
    {id:1, name: "gold"},
    {id:2, name: "wood"},
    {id:3, name: "food"},
];

export const QUANTITIES_MOCK = [
    {resourceID: 1, amount: 100},
    {resourceID: 2, amount: 100},
    {resourceID: 3, amount: 100},
];

export const TEMPLATE_BUILDINGS_MOCK = [
    {
        id: 1, 
        name: "Castle", 
        levels: [
            {level: 1, cost: [{resourceID: 1, amount: 100}], prod: [{resourceID: 2, amount: 100}], cons:[{resourceID: 2, amount: 2}]},
            {level: 2, cost: [{resourceID: 1, amount: 200}], prod: [{resourceID: 2, amount: 200}], cons:[]},
        ]
    },
    {
        id: 2, 
        name: "Cabin", 
        levels: [
            {level: 1, cost: [{resourceID: 2, amount: 300}], prod: [{resourceID: 2, amount: 300}], cons:[]},
            {level: 2, cost: [{resourceID: 2, amount: 400}], prod: [{resourceID: 2, amount: 400}], cons:[]},
        ]
    },
    {
        id: 3, 
        name: "Academy", 
        levels: [
            {level: 1, cost: [{resourceID: 3, amount: 100}], prod: [], cons:[]},
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
            {level: 1, cost: [], prod: [], cons:[{resourceID: 2, amount: 1}]},
        ]
    },
];

