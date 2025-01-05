import { cart, removeFromCart } from './cart.js';
import { coffeeList } from '../data/products.js';
let coffeeSum = '';
let coffeeCartHTML = document.querySelector('.js-coffeeSummary');

cart.forEach((item) => {
  const coffeeName = item.coffeeName;
  let matchingName;
  coffeeList.forEach((product) => {
    if (product.name === coffeeName) {
      matchingName = product;
    }
  });
  coffeeSum += `
    <div class="border border-gray-300 rounded-lg p-4 md:p-6 js-coffee-container-${coffeeName
      .replace(/\s+/g, '-')
      .toLowerCase()}">
        <p class="text-lg md:text-xl font-semibold text-deliverOp">
          Delivery date: Wednesday, January 1
        </p>

        <!-- Product details -->
        <div class="mt-4 flex flex-col md:flex-row justify-between">
          <div class="flex gap-4 items-start">
            <img
              src="${matchingName.image}"
              alt="${matchingName.name}"
              class="w-20 h-20 object-cover"
            />
            <div class="space-y-2">
              <h3 class="text-lg font-semibold">${matchingName.name}</h3>
              <p class="font-semibold text-price">$2.99</p>
              <div class="flex flex-wrap gap-3 text-sm">
                <span>Quantity: 1</span>
                <a href="#" class="text-upnD hover:text-hoverUpnD"
                  >Update</a
                >
                <a href="#" class="js-remove-button text-upnD hover:text-hoverUpnD" data-coffee-name="${coffeeName}"
                  >Delete</a
                >
              </div>
            </div>
          </div>

          <!-- Delivery options -->
          <div class="mt-6 md:mt-0 mr-0 md:mr-10 ml-0 md:ml-[100px]">
            <h3 class="text-lg font-semibold mb-3">
              Choose a delivery option:
            </h3>
            <div class="space-y-[2px]">
              <!-- Delivery Option 1 -->
              <label
                class="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-50 rounded"
              >
                <input
                  type="radio"
                  name="delivery"
                  class="mt-1 transform scale-125" checked
                />
                <div>
                  <p
                    class="font-semibold text-lg md:text-xl text-deliverOp"
                  >
                    Wednesday, January 1
                  </p>
                  <p class="text-base text-deliverry">$4.99 - Delivery</p>
                </div>
              </label>
              <!-- Delivery Option 2 -->
              <label
                class="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-50 rounded"
              >
                <input
                  type="radio"
                  name="delivery"
                  class="mt-1 transform scale-125"
                />
                <div>
                  <p
                    class="font-semibold text-lg md:text-xl text-deliverOp"
                  >
                    Wednesday, January 1
                  </p>
                  <p class="text-base text-deliverry">$4.99 - Delivery</p>
                </div>
              </label>
              <!-- Delivery Option 3 -->
              <label
                class="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-50 rounded"
              >
                <input
                  type="radio"
                  name="delivery"
                  class="mt-1 transform scale-125"
                />
                <div>
                  <p
                    class="font-semibold text-lg md:text-xl text-deliverOp"
                  >
                    Wednesday, January 1
                  </p>
                  <p class="text-base text-deliverry">$4.99 - Delivery</p>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    `;
  coffeeCartHTML.innerHTML = coffeeSum;
});

document.querySelectorAll('.js-remove-button').forEach((button) => {
  button.addEventListener('click', (event) => {
    const coffeeName = button.dataset.coffeeName;
    removeFromCart(coffeeName);

    const container = document.querySelector(
      `.js-coffee-container-${coffeeName.replace(/\s+/g, '-').toLowerCase()}`
    );

    container.remove();
  });
});
