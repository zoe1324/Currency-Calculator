'use strict';

class Model{
    constructor() { //setting hardcoded exchange rates
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
    convert(rate, input){
        let i = parseInt(input);
        return Math.round((((rate * i) + Number.EPSILON) * 100) / 100).toFixed(2);
    }



}