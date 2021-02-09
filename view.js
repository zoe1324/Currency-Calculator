'use strict';

class View{
    constructor() {
        this.input = "";
        this.home = "GBP";
        this.visit = "EUR";
    }

    registerClickListener1(handler){
        document.getElementById("1").addEventListener("click", handler)
    }
    registerClickListener2(handler){
        document.getElementById("2").addEventListener("click", handler)
    }
    registerClickListener3(handler){
        document.getElementById("3").addEventListener("click", handler)
    }
    registerClickListener4(handler){
        document.getElementById("4").addEventListener("click", handler)
    }
    registerClickListener5(handler){
        document.getElementById("5").addEventListener("click", handler)
    }
    registerClickListener6(handler){
        document.getElementById("6").addEventListener("click", handler)
    }
    registerClickListener7(handler){
        document.getElementById("7").addEventListener("click", handler)
    }
    registerClickListener8(handler){
        document.getElementById("8").addEventListener("click", handler)
    }
    registerClickListener9(handler){
        document.getElementById("9").addEventListener("click", handler)
    }
    registerClickListener0(handler){
        document.getElementById("0").addEventListener("click", handler)
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
    getHome(){
        return document.getElementById("home").value;
    }
    getVisit(){
        return document.getElementById("visit").value;
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