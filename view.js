'use strict';

class View{
    constructor() {
        this.input = "";
        this.home = "GBP";
        this.visit = "EUR";
    }
    registerClickListenerC(handler){
        document.getElementById("c").addEventListener("click", handler)
    }
    registerClickListenerEQ(handler){
        document.getElementById("=").addEventListener("click", handler)
    }
    registerChangeListenerH(handler){
        document.getElementById("home").addEventListener("change", handler)
    }
    registerChangeListenerV(handler){
        document.getElementById("visit").addEventListener("change", handler)
    }
    setHome(){
        this.home = document.getElementById("home").value;
    }
    setVisit(){
        this.visit = document.getElementById("visit").value;
    }
    showInput(input){
        let inp = document.getElementById("inputBox")
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
        const ans = document.getElementById("answer")
        ans.setAttribute("value",res);
    }

}