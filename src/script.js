import { cart } from './data/cart.js';
import { coffeeList } from './data/products.js';
let coffeeListHTML = '';
coffeeList.forEach((items) => {
  coffeeListHTML += `
    <div
      class="w-full p-2 group"
    >
      <div
        class="outline outline-white outline-1 flex flex-col justify-center items-center relative bg-whiteTranparent rounded-lg overflow-hidden group-hover:shadow-lg group-hover:scale-105 group-hover:cursor-pointer transition-all"
      >
        <div data-aos="fade-down" data-aos-duration="1500" class="w-full">
          <!-- Coffee Image -->
          <img
            src="${items.image}"
            alt="Coffee Item"
            class="w-full h-[470px] sm:h-[370px] md:h-[300px] object-cover object-center group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        
        <!-- Coffee Details -->
        <div
          class="space-y-4 p-4 flex flex-col justify-center items-center text-center w-full"
        >
          <!-- Coffee Name -->
          <p
            class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white truncate max-w-full px-2"
          >
            ${items.name}
          </p>
          
          <!-- Coffee Price -->
          <p class="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
            $${(items.priceCent / 100).toFixed(2)}
          </p>
          
          <!-- Add to Cart Button -->
          <button
            type="submit"
            class="js-add-button bg-softRed h-[40px] sm:h-[45px] md:h-[50px] lg:h-[55px] w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] py-2 px-4 text-white rounded-full flex justify-center items-center space-x-2 hover:bg-transparent hover:outline hover:outline-white hover:text-white transition-all duration-300"
            data-coffee-name="${items.name}"
          >
            <i class="ri-shopping-cart-fill"></i>
            <span class="text-xs sm:text-sm md:text-base lg:text-lg">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  `;
});

document.querySelector('.JS-coffee-List-Container').innerHTML = coffeeListHTML;

document.querySelectorAll('.js-add-button').forEach((button) => {
  button.addEventListener('click', () => {
    const coffeeName = button.dataset.coffeeName;

    const matchingItem = cart.find((item) => item.coffeeName === coffeeName);

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        coffeeName: coffeeName,
        quantity: 1,
      });
    }

    let cartQty = 0;
    cart.forEach((items) => {
      cartQty += items.quantity;
    });

    document.querySelector('.js-cart').innerHTML = cartQty;
  });
});
