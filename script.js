// MENU BUTTONS
const btnHat = document.getElementById("hatmenu");
const btnFace = document.getElementById("facemenu");
const btnTop = document.getElementById("topmenu");
const btnBottom = document.getElementById("bottommenu");
const btnShoe = document.getElementById("shoemenu");
const btnPrint = document.getElementById("printmenu");

// POPUP WINDOWS
const popupHat = document.getElementById("hatPopup");
const popupFace = document.getElementById("facePopup");
const popupTop = document.getElementById("topPopup");
const popupBottom = document.getElementById("bottomPopup");
const popupShoe = document.getElementById("shoePopup");
const popupPrint = document.getElementById("printPopup");


btnHat.addEventListener("click", function(e) {
    popupHat.classList.toggle("hide");
    console.log("click");
});

btnFace.addEventListener("click", function(e) {
    popupFace.classList.toggle("hide");
    console.log("click");
});

btnTop.addEventListener("click", function(e) {
    popupTop.classList.toggle("hide");
    console.log("click");
});

btnBottom.addEventListener("click", function(e) {
    popupBottom.classList.toggle("hide");
    console.log("click");
});

btnShoe.addEventListener("click", function(e) {
    popupShoe.classList.toggle("hide");
    console.log("click");
});