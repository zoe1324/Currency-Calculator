'use strict';

class View{

    constructor(home, visit, fee) {
        this.input = "";
        this.home = home;
        this.visit = visit;
        this.fee = fee;
    }
    registerClickListenerC(handler){
        document.getElementById("c").addEventListener("click", handler);
    }
    registerClickListenerEQ(handler){
        document.getElementById("=").addEventListener("click", handler);
    }
    registerChangeListenerH(handler){
        document.getElementById("home").addEventListener("change", handler);
    }
    registerChangeListenerV(handler){
        document.getElementById("visit").addEventListener("change", handler);
    }
    registerChangeListenerFee(handler){
        document.getElementById("fee").addEventListener("change", handler);
    }
    getFee(){
        return document.getElementById("fee").value;
    }
    getHome(){
        return document.getElementById("home").value;
    }
    getVisit(){
        return document.getElementById("visit").value;
    }
    setFee(fee){
        document.getElementById("fee").setAttribute("fee", fee);
        document.getElementById("fee").value = fee;
        this.fee = fee;
    }
    setHome(home){
        document.getElementById("home").setAttribute("value", home);
        document.getElementById("home").value = home;
        this.home = home;
    }
    setVisit(visit){
        document.getElementById("visit").setAttribute("value", visit);
        document.getElementById("visit").value = visit;
        this.visit = visit;
    }

    showInput(input){
        let inp = document.getElementById("inputBox");
        if(input === ""){
            inp.setAttribute("value", "");
            document.getElementById("answer").setAttribute("value", "");
            this.input = "";
        }
        else{
            let newInput = inp.value + input;
            inp.setAttribute("value",newInput);
            this.input = newInput;
        }

    }

    showResult(res) {
        const ans = document.getElementById("answer");
        ans.setAttribute("value",res);
    }

}