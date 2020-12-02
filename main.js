"use strict";
let modal = document.querySelector(".navMobileModal");
let timeOutWelcomeModal = document.querySelector(".welcomeModal");
let modalContent = document.querySelector(".navMobileModal .menuContent");
let timeOutnumberInput = document.getElementById("mobileNumber");
let timeOutwarningTxt = document.querySelector(".warningMessage");
let mainPageSearch = document.querySelector(".indexSearchIcon");
let searchModal = document.querySelector(".searchModal");
let searchBackArrow = document.querySelector(".backArrow");


mobileModalClose();
mobileModalOpen();
clickOpenCaret();
openTimeoutWelcomeBanner();
closeTimeoutWelcomeBanner();
continueButtonClicked();
searchIconClicked();
searchBoxBackClicked();

function searchBoxBackClicked(){
    searchBackArrow.addEventListener("click", function(e){
          searchModal.classList.remove("active");
          document.body.style.overflow = "";
    });
  
}
function searchIconClicked(){
    mainPageSearch.addEventListener("click", function(e){
            searchModal.classList.add("active");
            document.body.style.overflow = "hidden";
    });
}

function continueButtonClicked(){
    let continueButton = document.querySelector("#continueLogin");
    continueButton.addEventListener("click", function(e){
         mobileNumberValidation();
    });
}

function mobileNumberValidation(){
        let valueString = "";
            valueString = timeOutnumberInput.value;
        let numberPattern = /^([0-9]){10}$/;
        if(!valueString.match(numberPattern)){
            timeOutnumberInput.style.borderColor = "red";
            timeOutwarningTxt.classList.add("active");
        }else{
            timeOutnumberInput.style.borderColor = "gray";
            timeOutwarningTxt.classList.remove("active");
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

