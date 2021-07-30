export default function() {
  const productImagesUrl = `http://localhost:3000/media/products/`;

  return {
    categories: [],
    products: [],
    product: {},
    productImages: productImagesUrl,
    cart: [],
  };
}
