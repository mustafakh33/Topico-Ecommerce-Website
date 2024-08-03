 cartData = JSON.parse(localStorage.getItem("product_cart")) || [];
let items_checkout =document.getElementById('items_checkout');
let total_price_checkout = document.getElementById('total_price_checkout')
console.log(cartData.img)

function getCartItemsCheckout(){
    let containe_checkout = "";
    let total_price = 0;
    for (let i = 0; i < cartData.length; i++) {
        containe_checkout +=`
        <div class="item_cart">
        <img src="${cartData[i].img}" alt="">
        <div class="content">
            <h4>${cartData[i].name}</h4>
            <p class="price_cart">Price : <span>$${cartData[i].price}</span></p>
        </div>
    </div>
     
        `
        total_price += cartData[i].price;
    }
    items_checkout.innerHTML = containe_checkout;
    total_price_checkout.innerHTML = `$${total_price}`;
    cartIsEmpty();
    cartIsNotEmpty();
}
getCartItemsCheckout()

function cartIsEmpty() {
    if (cartData.length == 0) {
        items_checkout.innerHTML = `
        <div class="item_cart_empty">
        <h2>No Cart Items Found</h2>
        </div>
        `;
        items_checkout.classList.remove('active');
        items_checkout.classList.add('empty');
    }
}
function cartIsNotEmpty() {
    if (cartData.length !== 0) {
        items_checkout.classList.add('active');
        items_checkout.classList.remove('empty');
    }
}
