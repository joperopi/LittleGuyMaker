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

// GUY
const guyHat = document.getElementById("hat");
const guyFace = document.getElementById("face");
const guyTop = document.getElementById("top");
const guyBottom = document.getElementById("bottom");
const guyShoe = document.getElementById("shoe");


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

popupHat.addEventListener("click", function(e) {
    let itemNum = e.target.classList[1];
    itemNum = itemNum.substring(itemNum.length -1);
    guyHat.style.content = `url("img/LGMHat${itemNum}.png")`
    popupHat.classList.toggle("hide");
});

popupFace.addEventListener("click", function(e) {
    let itemNum = e.target.classList[1];
    itemNum = itemNum.substring(itemNum.length -1);
    guyFace.style.content = `url("img/LGMFace${itemNum}.png")`
    popupFace.classList.toggle("hide");
});

popupTop.addEventListener("click", function(e) {
    let itemNum = e.target.classList[1];
    itemNum = itemNum.substring(itemNum.length -1);
    guyTop.style.content = `url("img/LGMTop${itemNum}.png")`
    popupTop.classList.toggle("hide");
});

popupBottom.addEventListener("click", function(e) {
    let itemNum = e.target.classList[1];
    itemNum = itemNum.substring(itemNum.length -1);
    guyBottom.style.content = `url("img/LGMBottom${itemNum}.png")`
    popupBottom.classList.toggle("hide");
});

popupShoe.addEventListener("click", function(e) {
    let itemNum = e.target.classList[1];
    itemNum = itemNum.substring(itemNum.length -1);
    guyShoe.style.content = `url("img/LGMShoe${itemNum}.png")`
    popupShoe.classList.toggle("hide");
});