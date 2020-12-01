"use strict";
continueButtonClicked();

function continueButtonClicked(){
    // let continueButton = document.querySelector(".loginPageInputs input[type=\"button\"");
    let continueButton = document.querySelector("#continueLogin");
    continueButton.addEventListener("click", function(e){
         e.preventDefault();
         this.style.backgroundColor = "green";
         mobileNumberValidation();
         this.style.color = "yellow";
    });
}

function mobileNumberValidation(){
    let numberInput = document.querySelector("#mobileNumber");

        // let warningTxt = document.querySelector(".warningMessage");
        let warningTxt = numberInput.parentNode.querySelector(".warningMessage");
        let valueString = "";
            valueString = numberInput.value;
            alert(valueString);
        let numberPattern = /^([0-9]){10}$/;
        if(!valueString.match(numberPattern)){
            numberInput.style.borderColor = "red";
            warningTxt.classList.add("active");
        }else{
            numberInput.style.borderColor = "gray";
            warningTxt.classList.remove("active");
        } 

}