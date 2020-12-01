"use strict";
let modal = document.querySelector(".navMobileModal");
let timeOutWelcomeModal = document.querySelector(".welcomeModal");
let modalContent = document.querySelector(".navMobileModal .menuContent");
let numberInput = document.getElementById("mobileNumber");
let warningTxt = document.querySelector(".warningMessage");

mobileModalClose();
mobileModalOpen();
clickOpenCaret();
openTimeoutWelcomeBanner();
closeTimeoutWelcomeBanner();

continueButtonClicked();

function continueButtonClicked(){
    // let continueButton = document.querySelector(".welcomeModalInputs input[type=\"button\"");
    let continueButton = document.querySelector("#continueLogin");
    continueButton.addEventListener("click", function(e){
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


function closeTimeoutWelcomeBanner(){

    let closeButton = document.querySelector(".welcomeModal .welcomeModalClose");
    closeButton.addEventListener("click", function(e){
        timeOutWelcomeModal.click();
    });

   timeOutWelcomeModal.addEventListener("click", function(e){
        if(e.target === e.currentTarget){
            timeOutWelcomeModal.classList.remove("active");
        }
   });
}

function openTimeoutWelcomeBanner(){
     setTimeout(() => {
            timeOutWelcomeModal.classList.add("active");
     }, 10000);
}

function clickOpenCaret(){
     let caretOpener = document.querySelectorAll(".clickOpenCaret");
     for(let i = 0; i<caretOpener.length; i++){
         caretOpener[i].addEventListener("click", function(e){
              this.parentNode.querySelector(".closeCaret").classList.toggle("active");
              this.classList.toggle("rotateArrow");
              e.stopImmediatePropagation();
         });
      
     }
}

function mobileModalOpen(){
    let burgerButton = document.querySelector(".burger");
    burgerButton.addEventListener("click", function(e){
        // modal.style.display = "block";
        modal.classList.add("active")
        modalContent.classList.add("slideRight");
    });
}


function mobileModalClose(){
    
    modal.addEventListener("click", function(e){
          if(e.target === modal){
            //    modal.style.display = "none";
            modal.classList.remove("active");
               modalContent.classList.remove("slideRight");
          }
          e.stopPropagation();
        
    });
}

