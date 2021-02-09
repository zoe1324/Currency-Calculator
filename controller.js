'use strict';
/*global Model, View */ /* a jshint hint */

let model, view;

const initialise = () => {

    model = new Model();
    let home = model.getHomeLocal();
    let visit = model.getVisitLocal();
    console.log(visit, home);
    view = new View(home, visit);
    //check local storage for settings
    //on change,update local storage
    //use model to check local storage if null then default


    view.setHome(home);
    view.setVisit(visit);

    for(let i=0; i < 10; i++){
        document.getElementById(i.toString()).addEventListener("click", ()=>{
            view.showInput(i);
        });
    }
    view.registerClickListenerC(() =>{
        view.showInput("")
        }
    )
    view.registerClickListenerEQ(()=>{
        console.log(view.input);
        let rate = model.getExchangeRate(view.home,view.visit);
        let result = model.convert(rate, view.input);
        view.showResult(result);
    })
    view.registerChangeListenerH(()=>{
        let home = view.getHome();
        model.setHomeLocal(home);
        view.setHome(home);
    })
    view.registerChangeListenerV(()=>{
        let visit = view.getVisit();
        model.setVisitLocal(visit);
        view.setVisit(visit);
    })
    //do any initialisation and "plumbing" here
};

window.addEventListener("load", initialise);

