export default function() {
  const productImagesUrl = `http://localhost:3000/media/products/`;

  return {
    products: [],
    filteredProducts: [],
    product: {},
    cart: [],
    filter: {
      search: "",
      color: [],
      brand: [],
      category: [],
    },
    categories: [],
    productImages: productImagesUrl,
    brands: [],
    colors: [],
  };
}
