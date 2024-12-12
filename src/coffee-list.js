const coffeeList = [
  {
    image: './images/coffee-menu/black-coffee.png',
    name: 'Black Coffee',
    priceCent: 200,
  },
  {
    image: './images/coffee-menu/iced-latte.png',
    name: 'Iced Latte',
    priceCent: 250,
  },
  {
    image: './images/coffee-menu/caramel-machiato.png',
    name: 'Caramel Machiato',
    priceCent: 300,
  },
  {
    image: './images/coffee-menu/dark-choccolate.png',
    name: 'Dark Choccolate',
    priceCent: 350,
  },
  {
    image: './images/coffee-menu/fresh-milk-tea.png',
    name: 'Fresh Milk Tea',
    priceCent: 200,
  },
  {
    image: './images/coffee-menu/hot-black-coffee.png',
    name: 'Hot Black Coffee',
    priceCent: 150,
  },
  {
    image: './images/coffee-menu/hot-expresso.png',
    name: 'Hot Espresso',
    priceCent: 200,
  },
  {
    image: './images/coffee-menu/coffee-marble.png',
    name: 'Coffee Marble',
    priceCent: 300,
  },
  {
    image: './images/coffee-menu/lemon-tea.png',
    name: 'Lemon Tea',
    priceCent: 150,
  },
  {
    image: './images/coffee-menu/matcha-honey.png',
    name: 'Matcha Honey',
    priceCent: 300,
  },
];

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
                class="bg-softRed h-[40px] w-[175px] py-4 px-4 text-white text-center rounded-full flex justify-center items-center text-xl hover:bg-transparent hover:outline hover:outline-white hover:text-white transition-all space-x-[10px]"
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
