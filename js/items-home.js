fetch('js/items.json')
.then(response => response.json())
.then(data => {
  const swiper_items_sale = document.getElementById('swiper-items-sale');
  const other_product_swiper = document.getElementById('other_product_swiper');
  const other_product_swiper_2 = document.getElementById('other_product_swiper_2');
     all_products_json = data;
    data.forEach(product => {
        if(product.old_price){
            const percent_disc = Math.floor((product.old_price - product.price) / product.old_price * 100)
            swiper_items_sale.innerHTML +=`
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
              <p class="old-price">$${product.old_price}</p>
            </div>

            <span class="sale-present">%${percent_disc}</span>

            <div class="icons">
              <span><i onclick="addToCart(${product.id}, this)"  class="fa-solid fa-cart-plus"></i></span>
              <span><i class="fa-solid fa-heart"></i></span>
              <span><i class="fa-solid fa-share"></i></span>
            </div>


          </div>
            `
        }
    });
    data.forEach(product => {
            
            other_product_swiper.innerHTML +=`
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
            </div>

          

            <div class="icons">
              <span><i onclick="addToCart(${product.id}, this)"  class="fa-solid fa-cart-plus"></i></span>
              <span><i class="fa-solid fa-heart"></i></span>
              <span><i class="fa-solid fa-share"></i></span>
            </div>


          </div>
            `
        
    });
    data.forEach(product => {
            
          other_product_swiper_2.innerHTML +=`
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
            </div>

          

            <div class="icons">
              <span><i onclick="addToCart(${product.id}, this)"  class="fa-solid fa-cart-plus"></i></span>
              <span><i class="fa-solid fa-heart"></i></span>
              <span><i class="fa-solid fa-share"></i></span>
            </div>


          </div>
            `
        
    });
})


