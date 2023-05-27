import { Container } from "@thetinyspark/coffe-maker";
import { configIOC } from "./core/ioc/config";
import Engine from "./core/Engine";
import AppConst from "./core/ioc/app.const";

const defaultContainer = configIOC(new Container());
const engine = new Engine();

module.exports = {
    engine, 
    defaultContainer,
    appConstants:AppConst
};


async function onLoad(){
    window.removeEventListener("load", onLoad);
    let save = {cities:[], resources:[], templateBuildings:[]};
    try{
        const response = await window.fetch("./save.json")
        save = await response.json();
    }
    catch(error){
        console.log(error);
    }

    engine.init(defaultContainer, save);

    document.getElementById("cycleBtn").addEventListener("click", ()=>{
        engine.getFacade().sendNotification(AppConst.DO_CYCLE); 
        refresh();
    })
    document.getElementById("cityBtn").addEventListener("click", createCity)
    refresh();
}


async function createCity(){
    const cities = await engine.getFacade().query(AppConst.GET_CITIES_QUERY);
    const counterID = Math.max( 0, ...cities.map( c=>c.id) );
    const data =  {
        id: counterID + 1, 
        name: "City_"+counterID, 
        buildings:[{tplID:4}],
        wallet: []
    };
    engine.getFacade().sendNotification(AppConst.ADD_CITY, data);
    refresh();
}

function refresh(){
    displayCities();
}

function getResourceNameByID(resources, id){
    return resources.find( r=>r.id === id).name;
}

async function displayCities(){
    const container = document.getElementById("cities");
    const cities = await engine.getFacade().query(AppConst.GET_CITIES_QUERY);
    const resources = await engine.getFacade().query(AppConst.GET_RESOURCES_QUERY);

    container.innerHTML = cities.map( 
        (city)=>{
            return `
                <div class="city">
                    <h2>${city.name}</h2>
                    <h3>Ressources</h3>
                    ${city.wallet.get().map( r => `<p>${getResourceNameByID(resources, r.resourceID)}:${r.amount}</p>` ).join("")}
                    <h3>Bâtiments</h3>
                    ${city.buildings.map( b => {

                        if( b.level)
                            `<p>${b.name} - niv ${b.level.level}</p>`
                        else
                            `<p>${b.name}</p>`

                    } ).join("")}
                </div>
            `;
        }
    ).join("")
}

window.addEventListener("load", onLoad);