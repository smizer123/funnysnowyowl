export function cartTemplate(item, id, idSub, idAdd, value){
    let html = `
    <a class="checkoutItemName">${item}</a>
    <div class="checkoutControl">
        <a class="checkoutRemove">Remove</a>
        <div class="checkoutItemValue">
            <img id="${idSub}" class="checkoutItemImage" src="../img/minus.svg"> 
            <input id="${id}" class="checkoutItemAmount" type="number" value="${value}">
            <img id="${idAdd}" class="checkoutItemImage" src="../img/plus.svg">
        </div>
    </div>`;
    return html;
}