// add and remove active navbar
let listItems = document.querySelectorAll('ul li')

listItems.forEach((item)=>{
    item.addEventListener('click', ()=>{
        item.classList.remove('active');
    })
})

// open & close cart
let cart = document.querySelector('.cart');
function openCart(){
    cart.classList.add('active');
}
function closeCart(){
    cart.classList.remove('active');
}

// add items in cart
var all_products_json ;
let product_cart = JSON.parse(localStorage.getItem("product_cart")) || [];

var item_in_cart = document.getElementById('item-in-cart');
let count_item = document.querySelector('.count-item');

let price_cart_Head = document.querySelector('.price_cart_Head');
let count_item_head = document.querySelector('.count-item');

let price_cart_total = document.querySelector('.price-cart-total');
let count_item_cart = document.querySelector('.count-item-cart')

function addToCart(id, btn){
    product_cart.push(all_products_json[id]);
    localStorage.setItem("product_cart", JSON.stringify(product_cart))
    btn.classList.add('active');
    getCartItems();
}

let cartData;
function getCartItems(){
    cartData = JSON.parse(localStorage.getItem("product_cart")) || [];
    let total_price = 0;
    let items_c = "";
    for (let i = 0; i < cartData.length; i++) {
        items_c +=`
        <div class="item-cart">
          <img src="${cartData[i].img}" alt="" />
          <div class="content">
            <h4>${cartData[i].name}</h4>
            <p class="price-cart">$${cartData[i].price}</p>
          </div>
          <button onclick="remove_from_cart(${i})" class="delete-item"><i class="fa-solid fa-trash"></i></button>
        </div>
        `
        total_price += cartData[i].price;
    }
    item_in_cart.innerHTML = items_c;

    price_cart_Head.innerHTML = `$${total_price}`;
    count_item_head.innerHTML = cartData.length;

    price_cart_total.innerHTML = `$${total_price}`;
    count_item_cart.innerHTML = `(${cartData.length} item in cart)`;
}
getCartItems();

// delete items in cart 
function remove_from_cart(index){
    cartData = JSON.parse(localStorage.getItem("product_cart")) || [];
    cartData.splice(index,1);
    localStorage.setItem("product_cart",JSON.stringify(cartData));
     getCartItems();
     
     let addToCartButtons = document.querySelectorAll(".fa-cart-plus");
     for (let i = 0; i < addToCartButtons.length; i++) {
         addToCartButtons[i].classList.remove('active');
            cartData.forEach(product =>{
                if(product.id == i){
                    addToCartButtons[i].classList.add('active');
                }
            })
        } 
     getCartItems();
     getCartItemsCheckout();
}


// back_to_top
let back_to_top = document.querySelector(".back_to_top");
window.onscroll = ()=>{
    if(window.scrollY > 200){
        back_to_top.classList.add('active');
    }else{
        back_to_top.classList.remove('active');
    }
}
back_to_top.onclick = ()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth',
    })
}

// open & close menu
let btn_open_menu = document.querySelector(".btn_open_menu");
let btn_close_menu = document.querySelector(".btn-close-menu");
let menu_mobile = document.querySelector("header .links ul");
let bg_overlay = document.querySelector(".bg-overlay");
btn_open_menu.addEventListener("click",()=>{
    menu_mobile.classList.add('active');
})
btn_close_menu.addEventListener("click",()=>{
    menu_mobile.classList.remove('active');
})
bg_overlay.addEventListener("click",()=>{
    menu_mobile.classList.remove('active');
})
// change item image
let bigImage = document.getElementById('bigImg');
function changeImage(img){
    bigImage.src = img;
}