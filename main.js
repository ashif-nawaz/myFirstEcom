let modal = document.querySelector(".navMobileModal");
let modalContent = document.querySelector(".navMobileModal .menuContent");

mobileModalClose();
mobileModalOpen();

function mobileModalOpen(){
    let burgerButton = document.querySelector(".burger");
    burgerButton.addEventListener("click", function(e){
        modal.style.display = "block";
        modalContent.classList.add("slideRight");
    });
}


function mobileModalClose(){
    
    modal.addEventListener("click", function(e){
          if(e.target === e.currentTarget){
               modal.style.display = "none";
               modalContent.classList.remove("slideRight");
          }
          e.stopPropagation();
        
    }, true);
}

