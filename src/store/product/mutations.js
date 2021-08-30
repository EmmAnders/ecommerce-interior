export function setCategories(state, value) {
  state.categories = value;
}

export function setBrands(state, value) {
  state.brands = value;
}

export function setColors(state, value) {
  state.colors = value;
}

export function setProducts(state, value) {
  state.products = value;
}

export function setProduct(state, value) {
  state.product = value;
}

export function setFilter(state) {
  state.filter.color = [];
  state.filter.brand = [];
}

export function setCart(state, { product, qty }) {
  const cartItem = state.cart.find((item) => item.product._id == product._id);
  if (cartItem != null) {
    cartItem.qty += qty;
  } else {
    state.cart.push({ product: product, qty: qty });
  }
}

export function incrementQuantity(state, { product }) {
  let cartItem = state.cart.find((item) => item.product._id == product._id);
  cartItem.qty++;
}

export function decrementQuantity(state, { product }) {
  let cartItem = state.cart.find((item) => item.product._id == product._id);

  if (cartItem.qty <= 1) {
    state.cart = state.cart.filter((item) => {
      return item.product._id !== cartItem.product._id;
    });
  } else {
    cartItem.qty--;
  }
}

export function removeItem(state, id) {
  state.cart = state.cart.filter((item) => {
    return item.product._id !== id;
  });
}
