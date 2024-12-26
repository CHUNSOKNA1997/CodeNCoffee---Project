import { cart } from './cart.js';
import { coffeeList } from '../data/products.js';
let coffeSum = '';
let coffeeCartHTML = document.querySelector('.js-coffeeSum');

cart.forEach((item) => {
  const coffeeName = item.coffeeName;
  let matchingName;
  coffeeList.forEach((product) => {
    if (product.name === coffeeName) {
      matchingName = product;
    }
  });
  coffeSum += `
    <div
        class="flex flex-col md:flex-row items-center hover:bg-gray-100 px-4 py-5 border rounded-lg"
      >
        <div class="flex w-full md:w-2/5">
          <div class="w-16 md:w-20">
            <img
              class="h-16 md:h-24 object-cover"
              src="${matchingName.image}"
              alt="${matchingName.name}"
            />
          </div>
          <div class="flex flex-col justify-between ml-4 flex-grow">
            <span class="font-bold text-sm">${matchingName.name}</span>
            <span class="text-red-500 text-xs">CoffeeNCode</span>
            <a
              href="#"
              class="font-semibold hover:text-red-500 text-gray-500 text-xs"
              >Remove</a
            >
          </div>
        </div>
        <div class="flex justify-center w-full md:w-1/5 mt-4 md:mt-0">
          <p class="mx-2 border text-center w-10">${item.quantity}</p>
        </div>
        <span
          class="text-center w-full md:w-1/5 font-semibold text-sm mt-4 md:mt-0"
        >
          $${(matchingName.priceCent / 100).toFixed(2)}
        </span>
        <span
          class="text-center w-full md:w-1/5 font-semibold text-sm mt-4 md:mt-0"
        >
          $${(matchingName.priceCent / 100).toFixed(2)}
        </span>
      </div>
    `;
  coffeeCartHTML.innerHTML = coffeSum;
});
