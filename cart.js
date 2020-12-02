let backArrow = document.querySelector(".navBar .backArrow i");

backArrowClicked();

function backArrowClicked(){
    backArrow.addEventListener("click", function(e){
        window.history.back();
    });
}