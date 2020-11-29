"use strict";
let modal = document.querySelector(".navMobileModal");
let modalContent = document.querySelector(".navMobileModal .menuContent");

mobileModalClose();
mobileModalOpen();
clickOpenCaret();
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
        modal.style.display = "block";
        modalContent.classList.add("slideRight");
    });
}


function mobileModalClose(){
    
    modal.addEventListener("click", function(e){
          if(e.target === modal){
               modal.style.display = "none";
               modalContent.classList.remove("slideRight");
          }
          e.stopPropagation();
        
    });
}

