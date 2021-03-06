'use strict';
/*global Model, View */ /* a jshint hint */

let model, view;

const initialise = () => {
    let elem;
    model = new Model();
    let needUpdate = model.needsUpdate(); //finds last updated time, and returns if that time has passed.

    if(needUpdate === true){ //finds the database ecb rates
        let ref = new XMLHttpRequest();
        ref.onreadystatechange = function() {
            if (this.readyState===4 && this.status===200) {
                elem = this.responseText;
                let parser = new DOMParser();
                let xmlDoc = parser.parseFromString(elem, "text/xml");
                let cubes = xmlDoc.getElementsByTagName("Cube");
                let ratesOnline = {};
                for(let i = 1; i < cubes.length; i++){
                    if(cubes[i].getAttribute("currency") !== null && cubes[i].getAttribute("rate") !== null){
                        ratesOnline[cubes[i].getAttribute("currency")] = cubes[i].getAttribute("rate");
                    }
                }
                model.updateRates(ratesOnline);
                model.setLastUpdateTime();
            }
        };
        ref.open("POST", "https://devweb2020.cis.strath.ac.uk/~aes02112/ecbxml.php", true);
        ref.send();
    }

    let home = model.getHomeLocal();
    let visit = model.getVisitLocal();
    let fee = model.getFeeLocal();
    model.getCachedRates();
    view = new View(home, visit, fee);
    view.setRateTimeInFooter();
    view.setHome(home);
    view.setVisit(visit);
    view.setFee(fee);

    for(let i=0; i < 10; i++){
        document.getElementById(i.toString()).addEventListener("click", ()=>{
            view.showInput(i);
        });
    }
    view.registerClickListenerC(() =>{
        view.showInput("");
        }
    );
    view.registerClickListenerEQ(()=>{
        let result = model.convert(view.home, view.visit, view.input, view.fee);
        view.showResult(result);
    });
    view.registerChangeListenerH(()=>{
        let home = view.getHome();
        model.setHomeLocal(home);
        view.setHome(home);
    });
    view.registerChangeListenerV(()=>{
        let visit = view.getVisit();
        model.setVisitLocal(visit);
        view.setVisit(visit);
    });
    view.registerChangeListenerFee(()=>{
        let fee = view.getFee();
        model.setFeeLocal(fee);
        view.setFee(fee);
    });
    //do any initialisation and "plumbing" here
};

window.addEventListener("load", initialise);

