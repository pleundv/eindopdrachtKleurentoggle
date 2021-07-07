let bodyElement = document.querySelector("body");
let hamburger = document.querySelector(".menu");
let getkleurenMenu = document.querySelector(".kleurenMenu");

// menu verschijnt als je klikt 
hamburger.addEventListener('click', function (e) {
    getkleurenMenu.style.visibility = "visible";
})

//kleuren buttons 
let buttonHome = document.querySelector(".buttonHome");
let buttonRed = document.querySelector(".buttonRed");
let buttonOrange = document.querySelector(".buttonOrange");
let buttonPurple = document.querySelector(".buttonPurple");
let buttonGreen = document.querySelector(".buttonGreen")


buttonHome.addEventListener('click', function () {
    bodyElement.style.backgroundColor = "white";
    getkleurenMenu.style.visibility = "hidden";

});

buttonRed.addEventListener('click', function () {
    bodyElement.style.backgroundColor = "red";
    getkleurenMenu.style.visibility = "hidden";

});

buttonOrange.addEventListener('click', function () {
    bodyElement.style.backgroundColor = "orange";
    getkleurenMenu.style.visibility = "hidden";
});

buttonPurple.addEventListener('click', function () {
    bodyElement.style.backgroundColor = "purple";
    getkleurenMenu.style.visibility = "hidden";
});

buttonGreen.addEventListener('click', function () {
    bodyElement.style.backgroundColor = "green";
    getkleurenMenu.style.visibility = "hidden";
});



