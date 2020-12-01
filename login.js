"use strict";
// let numberInput = document.getElementById("mobileNumber");
let numberInput = document.getElementById("mobileNumber");
let warningTxt = document.querySelector(".warningMessage");
continueButtonClicked();

function continueButtonClicked(){
    // let continueButton = document.querySelector(".loginPageInputs input[type=\"button\"");
    let continueButton = document.querySelector("#continueLogin");
    continueButton.addEventListener("click", function(e){
         e.preventDefault();
        //  let numberInput = document.getElementById("mobileNumber");
             mobileNumberValidation();
    });
}

function mobileNumberValidation(){
        let valueString = "";
            valueString = numberInput.value;
        let numberPattern = /^([0-9]){10}$/;
        if(!valueString.match(numberPattern)){
            numberInput.style.borderColor = "red";
            warningTxt.classList.add("active");
        }else{
            numberInput.style.borderColor = "gray";
            warningTxt.classList.remove("active");
        } 

}