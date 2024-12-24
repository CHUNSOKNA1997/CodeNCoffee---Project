export const cart = [];

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
