import { cartTemplate } from "./cartItemTemplate.js";

let t1In = document.querySelector(".t1In");
let t1Ex = document.querySelector(".t1Ex");
let t2In = document.querySelectorAll(".tab2")[0];
let t2Ex = document.querySelectorAll(".tab2")[1];
let t3 = document.querySelector(".tab3");
let checkoutOverlay = document.querySelector(".checkoutOverlay");
let cart = document.querySelector(".cart");
let currentItem = "";
let currentId;
let addedList = [];

function addBulletPoint(point, indx){
    t3.children[1].innerHTML += `<li>${point}</li>`
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
    t3.style.display = "grid";
    t3.children[0].innerHTML = event.target.innerHTML + ":";
    t3.children[1].innerHTML = "";
    currentItem = event.target.innerHTML;
    currentId = event.target.id.slice(-1);
    console.log(addedList);
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
}

function addCartItem(){
    if (addedList.includes(`item${currentId}`)){
        alert(`You've already add ${currentItem}`);
    }
    else {
        let itemHtml = document.createElement("div");
        itemHtml.setAttribute("class", "checkoutItem");
        itemHtml.innerHTML = cartTemplate(currentItem, `itemInput${currentId}`, 1);
        checkoutOverlay.insertAdjacentElement("beforeend", itemHtml);
        addedList.push(`item${currentId}`);
        alert(`add ${currentItem} to cart`);
    }
}
    
t1In.addEventListener("click", showt2In);
t1Ex.addEventListener("click", showt2Ex);
[t2In, t2Ex].forEach((element) => element.addEventListener("click", showt3));
t3.children[3].addEventListener("click", addCartItem);
