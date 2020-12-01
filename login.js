"use strict";
let numberInput = document.getElementById("mobileNumber");
let warningTxt = document.querySelector(".warningMessage");

continueButtonClicked();

function continueButtonClicked(){
    let continueButton = document.querySelector("#continueLogin");
    continueButton.addEventListener("click", function(e){
         e.preventDefault();
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