export function categories(state) {
  return state.categories;
}

export function products(state) {
  return state.products;
}

export function product(state) {
  return state.product;
}

export function productImages(state) {
  return state.productImages;
}

export function cart(state) {
  return state.cart;
}

export function itemCount(state) {
  return state.cart.reduce((total, cartItem) => total + cartItem.qty, 0);
}

export function totalPrice(state) {
  return state.cart.reduce(
    (total, cartItem) => total + cartItem.qty * cartItem.product.price,
    0
  );
}
