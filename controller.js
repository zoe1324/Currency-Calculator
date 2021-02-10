'use strict';
/*global Model, View */ /* a jshint hint */

let model, view;

const initialise = () => {
    let elem;
    let ref = new XMLHttpRequest();
    ref.onreadystatechange = function() {
        if (this.readyState===4 && this.status===200) {
            elem = this.responseText;
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(elem, "text/xml");
            let cubes = xmlDoc.getElementsByTagName("Cube");
            let ratesOnline = {EUR : 1.0};
            for(let i = 1; i < cubes.length; i++){
                ratesOnline[cubes[i].getAttribute("currency")] = cubes[i].getAttribute("rate");
            }
            model.setRates(ratesOnline);
        }
    };
    ref.open("POST", "https://devweb2020.cis.strath.ac.uk/~aes02112/ecbxml.php", true);
    ref.send();

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
        let result = model.convert(view.home, view.visit, view.input, view.fee);
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

