'use strict';

class Model{

    constructor() {
        this.RATES = { //original hardcoded rates if database fails
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
    }
    
    needsUpdate(){
        let lastUpdate = localStorage.getItem("lastUpdateTime");
        let today = new Date();
        let currentMonth = today.getMonth() + 1;
        if(lastUpdate !== null){
            let lastTime = JSON.parse(lastUpdate);
            if(parseInt(lastTime.year) < today.getFullYear()){
                return true; //update if new year
            }
            else if(parseInt(lastTime.month) < currentMonth){
                return true; //update if new month same year
            }
            else if(parseInt(lastTime.date) < today.getDate()){
                return true; //update if new day same month
            }
        }
        else{
            return true; //if no local storage found, then update
        }
        return false;
    }
    
    setLastUpdateTime(){

        let d = new Date();
        let month = d.getMonth() + 1;
        let updateTime = {
            date : d.getDate().toString(),
            month : month.toString(),
            year : d.getFullYear().toString(),
        };

        console.log(updateTime);
        localStorage.setItem("lastUpdateTime", JSON.stringify(updateTime));
    }

    getCachedRates(){
        let cachedRates = localStorage.getItem("cachedRates");
        if(cachedRates !== null){
            this.RATES = JSON.parse(cachedRates);
        }
    }
    
    updateRates(updatedRates){
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
        localStorage.setItem("cachedRates", JSON.stringify(this.RATES));
    }
    convert(home, visit, input, fee){
        let f = parseInt(fee);
        let i = parseInt(input);
        f = f / 100; //percentage of fee to add at the end
        let v = this.RATES[visit];
        let h = this.RATES[home];
        i = (i / v) * h;
        f = i * f;
        return Math.ceil(i + f);
    }
    getFeeLocal(){
        let fee = localStorage.getItem("fee");
        if(!fee){
            fee = "0";
        }

        return fee;
    }
    setFeeLocal(fee){
        localStorage.setItem("fee", fee);
    }
    getHomeLocal(){
        let home = localStorage.getItem("home");
        if(!home){ //default pounds
            home = "GBP";
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