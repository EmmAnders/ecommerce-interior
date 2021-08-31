export function categories(state) {
  return state.categories;
}

export function brands(state) {
  return state.brands;
}

export function colors(state) {
  return state.colors;
}

export function products(state) {
  return state.products;
}

export function filter(state) {
  return state.filter;
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

export function filterItemCount(state) {
  return state.filter.color.length + state.filter.brand.length;
}
