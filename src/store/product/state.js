export default function() {
  const productImagesUrl = `http://localhost:3000/media/products/`;

  return {
    products: [],
    product: {},
    filter: {
      search: "",
      color: [],
      brand: [],
    },
    cart: [],
    categories: [],
    productImages: productImagesUrl,
    brands: [],
    colors: [],
  };
}
