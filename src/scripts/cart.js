export let cart = [
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

export function addToCart(coffeeName) {
  const matchingItem = cart.find((item) => item.coffeeName === coffeeName);

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      coffeeName: coffeeName,
      quantity: 1,
    });
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
}
