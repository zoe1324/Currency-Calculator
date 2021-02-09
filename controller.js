'use strict';
/*global Model, View */ /* a jshint hint */

let model, view;

const initialise = () => {

    model = new Model();
    let home = model.getHomeLocal();
    let visit = model.getVisitLocal();
    let fee = model.getFeeLocal();
    console.log(visit, home, fee);
    view = new View(home, visit, fee);

    view.setHome(home);
    view.setVisit(visit);
    view.setFee(fee);

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
        let result = model.convert(rate, view.input, view.fee);
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
    view.registerChangeListenerFee(()=>{
        let fee = view.getFee();
        model.setFeeLocal(fee);
        view.setFee(fee);
    })
    //do any initialisation and "plumbing" here
};

window.addEventListener("load", initialise);

