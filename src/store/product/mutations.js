export function SET_PRODUCTS(state, value) {
  state.products = value;
}

export function SET_PRODUCT(state, value) {
  state.product = value;
}

export function SET_CATEGORIES(state, value) {
  state.categories = value;
}

export function SET_BRANDS(state, value) {
  state.brands = value;
}

export function SET_COLORS(state, value) {
  state.colors = value;
}

export function SET_FILTER(state) {
  state.filter.color = [];
  state.filter.brand = [];
}

export function SET_FILTER_ITEM(state, selected) {
  state.filter.color = state.filter.color.filter((c) => {
    return c !== selected;
  });

  state.filter.brand = state.filter.brand.filter((b) => {
    return b !== selected;
  });
}

export function SET_CART(state, { product, qty }) {
  const cartItem = state.cart.find((item) => item.product._id == product._id);
  if (cartItem != null) {
    cartItem.qty += qty;
  } else {
    state.cart.push({ product: product, qty: qty });
  }
}

export function SET_REMOVE_CART_ITEM(state, id) {
  state.cart = state.cart.filter((item) => {
    return item.product._id !== id;
  });
}

export function SET_INCREMENTQTY(state, { product }) {
  let cartItem = state.cart.find((item) => item.product._id == product._id);
  cartItem.qty++;
}

export function SET_DECREMENTQTY(state, { product }) {
  let cartItem = state.cart.find((item) => item.product._id == product._id);

  if (cartItem.qty <= 1) {
    state.cart = state.cart.filter((item) => {
      return item.product._id !== cartItem.product._id;
    });
  } else {
    cartItem.qty--;
  }
}
