# Description
A typescript engine for 'management games' like 'Age of Empires'.

<br/><br/>

# How to install ? 
```bash
npm install @thetinyspark/paradox
```

<br/><br/>

# Getting started

The engine provides some usefull methods to interact with. 
First, you need to init the Engine with a configuration: 

```typescript
import * as Paradox from "@thetinyspark/paradox";

const templateBuildings = [
    {
        id: 1,                                              // building's template uid
        name: "Castle",                                     // building's name
        levels: [                                           // all possible levels for this building
            {
                level: 1, 
                cost: [{resourceID: 1, amount: 100}],       // amount of resources needed to buy this building's level
                prod: [{resourceID: 2, amount: 100}],       // amount of resources produced each cycle by the building at this level
                cons:[{resourceID: 2, amount: 2}],          // amount of resources consumed each cycle by the building at this level
                sold:[{resourceID: 1, amount: 50}]          // amount of resources gained when this building is sold at this level
            },
            {
                level: 2, 
                cost: [{resourceID: 1, amount: 200}], 
                prod: [{resourceID: 2, amount: 200}], 
                cons:[{resourceID: 2, amount: 3}], 
                sold:[{resourceID: 1, amount: 100}]
            },
        ]
    },
    {
        id: 2, 
        name: "Home", 
        levels: []
    },
];

const resources = [
    {
        id:1,               // resource's uid
        name: "gold"        // resource's name
    },
    {id:2, name: "wood"},
    {id:3, name: "food"}
];

const configuration = {
    cities: [],         // starts with no predefined cities
    resources,          // exhaustive list of resources used the game
    templateBuildings   // templates which are used to build all the buildings
};

Paradox.engine.init(Paradox.defaultContainer, configuration);
```


<br/><br/><br/><br/><br/><br/><br/><br/>

# Data Types used to import / export data to/from the engine
```typescript


// The 'configuration' sent to 'Paradox.engine.init(Paradox.defaultContainer, configuration)' must match this type
type GameSaveDescType = {
    cities?: CityDescType[], 
    resources?: ResourceDescType[], 
    templateBuildings?: TemplateBuildingDescType[]
};

// Others data description types 
type ResourceDescType = {
    id:number, 
    name:string
};

type QuantityDescType = {
    resourceID:number, 
    amount:number
};

type BuildingLevelDescType = {
    level: number, 
    cost: QuantityDescType[], 
    prod: QuantityDescType[], 
    cons: QuantityDescType[], 
    sold: QuantityDescType[]
};

type TemplateBuildingDescType = {
    id: number, 
    name: string, 
    levels: BuildingLevelDescType[]
};

type CityBuildingDescType = {
    tplID:number,
    level:number
};

type CityDescType = {
    id: number, 
    name: string, 
    buildings:CityBuildingDescType[],
    wallet: QuantityDescType[]
}

type CityPointerType = {
    id: number
}

type CreateCityBuildingType = {
    cityID: number, 
    tplID:number
};

type CityBuildingPointerType = {
    cityID: number, 
    id:number
};

type SetBuildingFrozenStatusType = {
    cityID: number, 
    id:number, 
    frozen:boolean
};

```







<br/><br/><br/><br/><br/><br/><br/><br/>

# The Engine object and its methods 

The ```Engine``` object, available from the ```Paradox.engine ``` property, provides 
a lot of usefull methods to interact with its core. <br/> Here are some basic use cases which 
used those methods.

<br/><br/>

## Cities 

### Add a city
```typescript
const cityData:CityDescType = {
    id: 1, 
    name: "Atlantis", 
    buildings:[{tplID:1, level:2}],
    wallet: [{resourceID: 1, amount: 100}]
};
Paradox.engine.addCity(cityData);
```

### Remove a city
```typescript
const data:CityPointerType = {id:1};
Paradox.engine.removeCity(data);
```

### Get all cities
```typescript
Paradox.engine.getCities().then( 
    (cities:City[]) => {
        // ...
    }
);
```

### Get a city by its id 
```typescript
Paradox.engine.getCityByID({id:1}).then( 
    (city:City) => {
        // ...
    }
);
```

### Create multiples cities at once
```typescript
const cities:CityDescType[] = [
    {
        id: 1, 
        name: "city1", 
        buildings:[],
        wallet:[{resourceID: 1, amount: 100}, {resourceID: 2, amount: 100}]
    },
    {
        id: 2, 
        name: "city2", 
        buildings:[],
        wallet:[{resourceID: 1, amount: 50}, {resourceID: 2, amount: 50}]
    },

];
Paradox.engine.createCities(cities);
```

<br/><br/>

## Resources 

### Create multiple resources at once
```typescript
const resources:ResourceDescType[] = [{id:1, name: "gold"},{id:2, name: "wood"},{id:3, name: "food"}];
Paradox.engine.createResources(resources)
```
### Get all resources
```typescript
Paradox.engine.getResources().then( (resources:Resource:[])=>{});
```


<br/><br/>

## Buildings

### Adds a building for free to a city
```typescript
const data:CreateCityBuildingType = {cityID: 1, tplID: 1};
Paradox.engine.addBuilding(data);
```

### Freezes a city's building
A frozen building cannot consume nor produce anything on cycle

```typescript
const data:SetBuildingFrozenStatusType = {cityID: 1, id: 1, frozen:true};
Paradox.engine.setBuildingFrozenStatus(data);
```

### Buys a building and add it to a city (if city has enough resources)
```typescript
const data:CreateCityBuildingType = {cityID: 1, tplID: 1};
Paradox.engine.buyBuilding(data);
```

### Upgrades a building level (if city has enough resources)
```typescript
const data:CityBuildingPointerType = {cityID: 1, id:1};
Paradox.engine.upgradeBuilding(data);
```

### Removes a building for free from a city
```typescript
const data:CityBuildingPointerType = {cityID: 1, id:1};
Paradox.engine.removeBuilding(data);
```

### Sells a building and removes it from a city
```typescript
const data:CityBuildingPointerType = {cityID: 1, id:1};
Paradox.engine.sellBuilding(data);
```

<br/><br/>



## Building's templates

### Create multiple templates at once
```typescript
const data:TemplateBuildingDescType[] = [
    {
        id: 1, 
        name: "Castle", 
        levels: [
            {
                level: 1, 
                cost: [{resourceID: 1, amount: 100}], 
                prod: [{resourceID: 2, amount: 100}], 
                cons:[{resourceID: 2, amount: 2}], 
                sold:[{resourceID: 1, amount: 50}]
            },
            {
                level: 2, 
                cost: [{resourceID: 1, amount: 200}], 
                prod: [{resourceID: 2, amount: 200}], 
                cons:[], 
                sold:[]
            },
        ]
    },
    {
        id: 2, 
        name: "Home", 
        levels: []
    },
];
Paradox.engine.createBuildingTemplates(data);
```

### Get all templates
```typescript
Paradox.engine.getTemplateBuildings().then( (templates:TemplateBuilding[])=>{});
```

<br/><br/>

## Import/export data

### Import / restore game data
```typescript
const data:GameSaveDescType = { 
    cities:             [/* ... cities data */      ],
    resources:          [/* ... resources data */   ],
    templateBuildings:  [/* ... templates data */   ],
};
Paradox.engine.restoreGameData(data);
```

### Save / export game data
```typescript
Paradox.engine.saveGameData().then( (gameData:GameSaveDescType)=>{});
```

<br/><br/>

## Process a cycle

Processes a cycle. A cycle means that productions are added to cities's wallets <br /> 
and consumptions are removed from them too.

```typescript
Paradox.engine.doCycle();
```



<br/><br/><br/><br/><br/><br/><br/><br/>

# Data Types used by the engine's core

## The 'Resource' object
A resource object describes a resource with a name and a unique id.

```typescript
// used by the engine
class Resource{
    constructor(
        public id:number = -1,
        public name:string = "",
    ){}       
}
```

## The 'Quantity' object
The 'Quantity' object describes a certain amount for a specific resource, targeted by its id.

```typescript
// used by the engine
class Quantity{
    constructor(
        public resourceID:number = -1,
        public amount:number = 0,
    ){}
}
```

## The 'QuantityList' object
The 'QuantityList' object describes a list of 'Quantity' objects.

```typescript
// used by the engine
class QuantityList{
    constructor( quantities:Quantity[] ){}
    public set(quantities:Quantity[]):void{}
    public get ():Quantity[]{}
}
```

## The 'BuildingLevel' object
The 'BuildingLevel' object describes a building's level.
```typescript

// used by the engine
class BuildingLevel{
    constructor(
        public level:number = 0,
        public cost:QuantityList = new QuantityList([]),
        public prod:QuantityList = new QuantityList([]), 
        public cons:QuantityList = new QuantityList([]), 
        public sold:QuantityList = new QuantityList([]), 
    ){}
}
```
## The 'Building' object
The 'Building' object describes a building at a certain level.
```typescript

// used by the engine
class Building{
    constructor(
        public name:string = "",
        public level:BuildingLevel = null, 
        public tplBuildingID:number = -1,
        public id:number = -1,
    ){}
}
```

## The 'TemplateBuilding' object
The 'TemplateBuilding' object describes a template which is used to create buildings.
```typescript

// used by the engine
class TemplateBuilding{
    constructor(
        public id:number = -1,
        public name:string = "",
        public levels:BuildingLevel[] = [], 
    ){}
}
```

## The 'City' object
The 'City' object describes a template describes a city
```typescript

// used by the engine
class City{
    constructor(
        public id:number = 0, 
        public name:string = "",
        public buildings:Building[] = [],
        public wallet:QuantityList = new QuantityList([])
    ){}
}
```




