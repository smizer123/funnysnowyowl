let cart = document.querySelector(".cart").children[0];
let cartOverlay = document.querySelector(".checkoutOverlay");
let closeButton = document.querySelector(".checkoutHeaderClose");
let cartAdd = document.querySelector(".t3CheckoutBorder");
let body = document.body;

console.log(closeButton);

function showCheckoutOverlay(){
    cartOverlay.style.display = "flex";
    cartOverlay.style.backgroundColor = "white";
    body.style.backgroundColor = "rgb(0,0,0,0.4)";
    body.style.pointerEvents = "none";
    cartOverlay.style.pointerEvents = "auto";
}

function closeCheckoutOverlay(){
    cartOverlay.style.display = "none";
    body.style.backgroundColor = "white";
    body.style.pointerEvents = "auto";
}

cart.addEventListener("click", showCheckoutOverlay);
closeButton.addEventListener("click", closeCheckoutOverlay);