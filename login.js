mobileNumberValidation();

function mobileNumberValidation(){
    let numberInput = document.querySelector(".welcomeModalInputs input[type=\"number\"");

    numberInput.addEventListener("blur", function(e){
        let warningTxt = document.querySelector(".warningMessage");
        let valueString = "";
            valueString = numberInput.value;
        let numberPattern = /^([0-9]){10}$/;
        if(!valueString.match(numberPattern)){
            this.style.borderColor = "red";
            warningTxt.classList.add("active");
        }else{
            this.style.borderColor = "gray";
            warningTxt.classList.remove("active");
        }
    });
    

}