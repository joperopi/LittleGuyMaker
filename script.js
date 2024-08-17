// MENU BUTTONS
const btnHat = document.getElementById("hatmenu");
const btnFace = document.getElementById("facemenu");
const btnTop = document.getElementById("topmenu");
const btnBottom = document.getElementById("bottommenu");
const btnShoe = document.getElementById("shoemenu");

// POPUP WINDOWS
const popupHat = document.getElementById("hatPopup");
const popupFace = document.getElementById("facePopup");
const popupTop = document.getElementById("topPopup");
const popupBottom = document.getElementById("bottomPopup");
const popupShoe = document.getElementById("shoePopup");

// GUY
const guyHat = document.getElementById("hat");
const guyFace = document.getElementById("face");
const guyTop = document.getElementById("top");
const guyBottom = document.getElementById("bottom");
const guyShoe = document.getElementById("shoe");

let lastOpened = popupHat;

btnHat.addEventListener("click", function(e) {
    popupHat.classList.toggle("hide");
    console.log("click");
    if (lastOpened != popupHat) {
        lastOpened.classList.add("hide");
    }
    lastOpened = popupHat;
});

btnFace.addEventListener("click", function(e) {
    popupFace.classList.toggle("hide");
    console.log("click");
    if (lastOpened != popupFace) {
        lastOpened.classList.add("hide");
    }
    lastOpened = popupFace;
});

btnTop.addEventListener("click", function(e) {
    popupTop.classList.toggle("hide");
    console.log("click");
    if (lastOpened != popupTop) {
        lastOpened.classList.add("hide");
    }
    lastOpened = popupTop;
});

btnBottom.addEventListener("click", function(e) {
    popupBottom.classList.toggle("hide");
    console.log("click");
    if (lastOpened != popupBottom) {
        lastOpened.classList.add("hide");
    }
    lastOpened = popupBottom;
});

btnShoe.addEventListener("click", function(e) {
    popupShoe.classList.toggle("hide");
    console.log("click");
    if (lastOpened != popupShoe) {
        lastOpened.classList.add("hide");
    }
    lastOpened = popupShoe;
});

popupHat.addEventListener("click", function(e) {
    let itemNum = getNumber(e);
    guyHat.style.content = `url("img/LGMHat${itemNum}.png")`
    popupHat.classList.toggle("hide");
});

popupFace.addEventListener("click", function(e) {
    let itemNum = getNumber(e);
    guyFace.style.content = `url("img/LGMFace${itemNum}.png")`
    popupFace.classList.toggle("hide");
});

popupTop.addEventListener("click", function(e) {
    let itemNum = getNumber(e);
    guyTop.style.content = `url("img/LGMTop${itemNum}.png")`
    popupTop.classList.toggle("hide");
});

popupBottom.addEventListener("click", function(e) {
    let itemNum = getNumber(e);
    guyBottom.style.content = `url("img/LGMBottom${itemNum}.png")`
    popupBottom.classList.toggle("hide");
});

popupShoe.addEventListener("click", function(e) {
    let itemNum = getNumber(e);
    guyShoe.style.content = `url("img/LGMShoe${itemNum}.png")`
    popupShoe.classList.toggle("hide");
});

function getNumber(e) {
    let itemNum = e.target.classList[1];
    itemNum = itemNum.replace(/[^0-9]/g,"");
    return itemNum;
}