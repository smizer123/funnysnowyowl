export function cartTemplate(item, id, value){
    let html = `
    <a class="checkoutItemName">${item}</a>
    <div class="checkoutControl">
        <a class="checkoutRemove">Remove</a> <!--delete checkoutItem-->
        <div class="checkoutItemValue">
            <img class="checkoutItemImage" src="../img/minus.svg"> 
            <input id="${id}" class="checkoutItemAmount" type="number" value="${value}">
            <img class="checkoutItemImage" src="../img/plus.svg">
        </div>
    </div>`;
    return html;
}