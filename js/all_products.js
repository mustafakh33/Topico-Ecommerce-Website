fetch('js/items.json')
.then(response => response.json())
.then(data => {
  const products_dev = document.getElementById('products_dev');
     all_products_json = data;
    data.forEach(product => {

            const old_price_paragrahp = product.old_price ? `<p class="old-price">$${product.old_price}</p>` :``;
            const percent_disc = Math.floor((product.old_price - product.price) / product.old_price * 100);
            const percent_disc_span = product.old_price ? `<span class="sale-present">%${percent_disc}</span>` : ``;
            products_dev.innerHTML +=`
            <div class="product swiper-slide">

            <div class="img-product">
              <img src="${product.img}" alt="">
              <img class="img-hover" src="${product.img_hover}" alt="">
            </div>

            <h3 class="name-product">
              <a href="#">${product.name}</a>
            </h3>

            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>

            <div class="price">
              <p><span>$${product.price}</span></p>
              ${old_price_paragrahp}
            </div>

            ${percent_disc_span}
            
            <div class="icons">
              <span><i onclick="addToCart(${product.id}, this)"  class="fa-solid fa-cart-plus"></i></span>
              <span><i class="fa-solid fa-heart"></i></span>
              <span><i class="fa-solid fa-share"></i></span>
            </div>


          </div>
            `

    });

})

// open & close filter

let filter = document.querySelector('.filter');
let btn_filter = document.querySelector('.btn_filter')
btn_filter.addEventListener('click',()=>{
  filter.classList.toggle('active')
})

