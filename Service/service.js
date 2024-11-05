import { cartTemplate } from "./cartItemTemplate.js";

let t1In = document.querySelector(".t1In");
let t1Ex = document.querySelector(".t1Ex");
let t2In = document.querySelectorAll(".tab2")[0];
let t2Ex = document.querySelectorAll(".tab2")[1];
let t3 = document.querySelector(".tab3");
let checkoutOverlay = document.querySelector(".checkoutOverlay");
let checkoutItemImage = document.querySelectorAll(".checkoutItemImage");
let currentItem = "";
let currentId = 0;

function hideItem(){
    t2Ex.style.display = "none";
    t3.style.display = "none";
}   

function addBulletPoint(pointArray, indx){
    t3.children[1].innerHTML += `<li id="item${indx+5}">${pointArray}</li>`
}

function showt2In(event){
    t2Ex.style.display = "none";
    t2In.style.display = "unset";
    t3.style.display = "none";
    t2In.style.border = "2px solid grey";
    t2Ex.style.border = "2px solid grey";
}

function showt2Ex(event){
    t2In.style.display = "none";
    t2Ex.style.display = "unset";
    t3.style.display = "none";
    t2In.style.border = "2px solid grey";
    t2Ex.style.border = "2px solid grey";
}

function showt3(event){
    t2In.style.borderStyle = "solid none solid solid";
    t2Ex.style.borderStyle = "solid none solid solid";
    t3.children[1].innerHTML = "";
    t3.style.display = "grid";
    t3.children[0].innerHTML = event.target.innerHTML + ":";
    currentItem = event.target.innerHTML;
    try {fetch("../textFile/" + event.target.id + ".txt")
    .then(response => response.text())
    .then(text => {
        let bulletPoint = text.split(".");
        let indx = 0;
        bulletPoint.pop();
        bulletPoint.forEach(addBulletPoint, indx);
    });
    }
    catch(err){
        alert(err.message);
    }      
    // console.log(event.target.id);
}

function addCartItem(){
    let itemHtml = document.createElement("div");
    itemHtml.setAttribute("class", "checkoutItem");
    itemHtml.innerHTML = cartTemplate(currentItem, `itemInput${currentId}`, 1);
    checkoutOverlay.insertAdjacentElement("beforeend", itemHtml);
    // alert(`add ${currentItem} to cart`);
    currentId += 1;
}
    
t1In.addEventListener("click", showt2In);
t1Ex.addEventListener("click", showt2Ex);
[t2In, t2Ex].forEach((element) => element.addEventListener("click", showt3));
t3.children[3].addEventListener("click", addCartItem);
// checkoutItemImage[0].addEventListener("click", minusInput);
// checkoutItemImage[1].addEventListener("click", addInput);
