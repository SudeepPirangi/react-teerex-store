import CONSTANTS from "../constants/constants";

const productsService = async () => {
  try {
    const products = await fetch(CONSTANTS.PRODUCTS_URI);
    return products.json();
  } catch (error) {
    console.log("Error while fetching products", error);
  }
};

export default productsService;
