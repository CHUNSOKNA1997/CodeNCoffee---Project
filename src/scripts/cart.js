export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
  cart = [
    {
      coffeeName: 'Black Coffee',
      quantity: 1,
    },
    {
      coffeeName: 'Iced Latte',
      quantity: 1,
    },
    {
      coffeeName: 'Caramel Machiato',
      quantity: 1,
    },
  ];
}

export function saveToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(coffeeName) {
  const matchingItem = cart.find((item) => item.coffeeName === coffeeName);

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      coffeeName: coffeeName,
      quantity: 1,
    });

    saveToLocalStorage();
  }
}

export function removeFromCart(coffeeName) {
  let newCart = [];
  cart.forEach((item) => {
    if (item.coffeeName !== coffeeName) {
      newCart.push(item);
    }
  });
  cart = newCart;

  saveToLocalStorage();
}
