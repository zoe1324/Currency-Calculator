'use strict';

class Model{
    constructor() { //setting hardcoded exchange rates
        this.gbp_to = {"USD": 1.38, "JPY" , "BGN", "CZK","DKK", "HUF", "RON", "SEK", "CHF", "ISK", "NOK", "HRK", "RUB", "TRY", "AUD", "BRL", "CAD"}
        this.gbp_to_eur = 1.14;
        this.gbp_to_pln = 5.10;
        this.eur_to_gbp = 0.88;
        this.eur_to_pln = 4.48;
        this.pln_to_gbp = 0.20;
        this.pln_to_eur = 0.22;
    }

    getExchangeRate(home, visit){
        let rate;
        console.log(visit);
        console.log(home);
        if(visit === "EUR"){
            if(home === "GBP"){
                rate = this.eur_to_gbp;
            }
            else if(home === "PLN") {
                rate = this.eur_to_pln;
            }
            else{
                rate = 1;
            }
        }
        else if(visit === "GBP"){
            if(home === "EUR"){
                rate = this.gbp_to_eur;
            }
            else if(home === "PLN"){
                rate = this.gbp_to_pln;
            }
            else{
                rate = 1;
            }
        }
        else{
            if(home === "GBP"){
                rate = this.pln_to_gbp;
            }
            else if(home === "EUR"){
                rate = this.pln_to_eur;
            }
            else{
                rate = 1;
            }
        }

        console.log(rate);
        return rate;

    }
    convert(rate, input, fee){
        let f = parseInt(fee);
        let i = parseInt(input);
        f = f / 100;
        let conversion = Math.round((((rate * i) + Number.EPSILON) * 100) / 100);
        console.log(conversion);
        return (conversion + (conversion * f));
    }
    getFeeLocal(){
        let fee = localStorage.getItem("fee");
        if(!fee){
            fee = "0"
        }

        return fee;
    }
    setFeeLocal(fee){
        localStorage.setItem("fee", fee);
    }
    getHomeLocal(){
        let home = localStorage.getItem("home");
        if(!home){
            home = "GBP"
        }

        return home;
    }
    setHomeLocal(home){
        localStorage.setItem("home", home);
    }
    getVisitLocal(){
        let visit = localStorage.getItem("visit");

        if(!visit){
            visit = "EUR";
        }

        return visit;
    }
    setVisitLocal(visit){
        localStorage.setItem("visit", visit);
    }
}