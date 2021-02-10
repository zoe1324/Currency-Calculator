'use strict';

class Model{

    constructor() {
        this.RATES = {
            EUR : 1.0,
            USD : 1.2104,
            JPY : 126.58,
            BGN : 1.9558,
            CZK : 25.738,
            DKK : 7.4369,
            GBP : 0.87828,
            HUF : 358.88,
            PLN : 4.4761,
            RON : 4.8753,
            SEK : 10.1058,
            CHF : 1.0817,
            ISK : 154.10,
            NOK : 10.2588,
            HRK : 7.5670,
            RUB : 89.6164,
            TRY : 8.5883,
            AUD : 1.5681,
            BRL : 6.5530,
            CAD : 1.5414,
            CNY : 7.7894,
            HKD : 9.3827,
            IDR : 16929.80,
            ILS : 3.9401,
            INR : 88.2765,
            KRW : 1347.42,
            MXN : 24.3205,
            MYR : 4.8997,
            NZD : 1.6741,
            PHP : 58.142,
            SGD : 1.6074,
            THB : 36.239,
            ZAR : 17.8953
        };

        //Use XML DOM parsing as per lectures then get all Cube tags -
        // then iterate over these but
        // only process ones that have the currency and rate attributes set.
    }
    setRates(updatedRates){
        console.log(updatedRates);

        for (let prop in updatedRates){
            if (updatedRates.hasOwnProperty(prop)){
                console.log(prop + " : " + this.RATES[prop]);
                console.log(prop + " : " + updatedRates[prop]);
                if (this.RATES[prop] !== null){
                    this.RATES[prop] = updatedRates[prop];
                    console.log(this.RATES[prop] + " : " + updatedRates[prop]);
                }
            }

        }
        console.log(this.RATES);
    }
    convert(home, visit, input, fee){
        console.log(home, visit, input, fee);
        console.log(home);
        console.log(visit);
        let f = parseInt(fee);
        let i = parseInt(input);
        f = f / 100; //percentage of fee to add at the end
        let v = this.RATES[visit];
        let h = this.RATES[home];
        console.log(v);
        console.log(h);
        i = (i / v) * h;
        f = i * f;
        console.log(i);
        console.log(f);
        return Math.ceil(i + f);
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
        if(!home){ //default pounds
            home = "GBP"
        }

        return home;
    }
    setHomeLocal(home){
        localStorage.setItem("home", home);
    }
    getVisitLocal(){
        let visit = localStorage.getItem("visit");

        if(!visit){ //default euros
            visit = "EUR";
        }

        return visit;
    }
    setVisitLocal(visit){
        localStorage.setItem("visit", visit);
    }
}