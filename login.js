"use strict";
let numberInput = document.getElementById("mobileNumber");
continueButtonClicked();

function continueButtonClicked(){
    // let continueButton = document.querySelector(".loginPageInputs input[type=\"button\"");
    let continueButton = document.querySelector("#continueLogin");
    continueButton.addEventListener("click", function(e){
         e.preventDefault();
         let numberInput = document.getElementById("mobileNumber");
             alert(numberInput);
    });
}

function mobileNumberValidation(){
    //    let numberInput = document.getElementById("mobileNumber");
        //     numberInput.style.background = "red";
        // // let warningTxt = document.querySelector(".warningMessage");
        // let warningTxt = numberInput.parentNode.querySelector(".warningMessage");
        // let valueString = "";
        //     valueString = numberInput.value;
           
        // let numberPattern = /^([0-9]){10}$/;
        // if(!valueString.match(numberPattern)){
        //     numberInput.style.borderColor = "red";
        //     warningTxt.classList.add("active");
        // }else{
        //     numberInput.style.borderColor = "gray";
        //     warningTxt.classList.remove("active");
        // } 

}