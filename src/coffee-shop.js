let coffeeListHTML = '';
coffeeList.forEach((items) => {
  coffeeListHTML += `
    <div
          class="outline outline-white outline-1 flex flex-col justify-center items-center relative"
        >
          <div data-aos="fade-down" data-aos-duration="1500">
            <img
              src="${items.image}"
              class="h-[350px]"
            />
            <div
              class="space-y-[27px] flex flex-col justify-center items-center mb-[55px]"
            >
              <p class="text-3xl text-white font-semibold">${items.name}</p>
              <p class="text-white text-2xl font-semibold">$${(
                items.priceCent / 100
              ).toFixed(2)}</p>
              <button
                type="submit"
                class="js-add-button bg-softRed h-[40px] w-[175px] py-4 px-4 text-white text-center rounded-full flex justify-center items-center text-xl hover:bg-transparent hover:outline hover:outline-white hover:text-white transition-all space-x-[10px]"
                data-coffee-name="${items.name}"
              >
                <i class="ri-shopping-cart-fill"></i>
                <span class="text-lg">Added to Cart</span>
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

    const MatchingItems = cart.find((item) => item.coffeeName === coffeeName);

    if (MatchingItems) {
      MatchingItems.quantity += 1;
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

    console.log(cartQty);
  });
});
