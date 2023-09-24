export const getCartTotal = (cartItems) => {
  let totalPrice = 0;
  Object.values(cartItems).map((item) => {
    let price;
    item.price ? (price = item.price) : (price = item.defaultPrice);
    totalPrice += item.quantity * price;
  });

  return totalPrice / 100;
};
