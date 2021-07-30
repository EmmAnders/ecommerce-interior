export function setCategories(state, value) {
  state.categories = value;
}

export function setProducts(state, value) {
  state.products = value;
}

export function setProduct(state, value) {
  state.product = value;
}

export function setLoad(state, value) {
  state.uploadingData = value;
}

export function setCart(state, { product, qty }) {
  const cartItem = state.cart.find((item) => item.product._id == product._id);
  if (cartItem != null) {
    cartItem.qty += qty;
  } else {
    state.cart.push({ product: product, qty: qty });
  }
}
