'use strict';
/*global Model, View */ /* a jshint hint */

let model, view;

const initialise = evt => {
    model = new Model();
    view = new View();

    view.registerClickListener1(() =>{
        view.showInput("1")
        }
    )
    view.registerClickListener2(() =>{
        view.showInput("2")
        }
    )
    view.registerClickListener3(() =>{
        view.showInput("3")
        }
    )
    view.registerClickListener4(() =>{
        view.showInput("4")
        }
    )
    view.registerClickListener5(() =>{
        view.showInput("5")
        }
    )
    view.registerClickListener6(() =>{
        view.showInput("6")
        }
    )
    view.registerClickListener7(() =>{
        view.showInput("7")
        }
    )
    view.registerClickListener8(() =>{
        view.showInput("8")
        }
    )
    view.registerClickListener9(() =>{
        view.showInput("9")
        }
    )
    view.registerClickListener0(() =>{
        view.showInput("0")
        }
    )
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
        view.setHome();
    })
    view.registerChangeListenerV(()=>{
        view.setVisit();
    })
    //do any initialisation and "plumbing" here
};

window.addEventListener("load", initialise);

