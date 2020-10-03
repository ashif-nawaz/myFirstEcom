var burgerButton=document.getElementById("burgerMenuIcon");
var mobileMenu=document.getElementById("mobileMenuBar");
var closeButton=document.getElementById("closeSideMenu");

burgerButton.onclick=function() {
    mobileMenu.style.width="60vw";
}
closeButton.onclick=function() {
    mobileMenu.style.width="0vw";
}


