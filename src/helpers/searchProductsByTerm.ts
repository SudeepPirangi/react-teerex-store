import IProduct from "../interfaces/IProduct";

const searchProductsByTerm = (filteredProducts: IProduct[], unfilteredProducts: IProduct[], searchTerm: string): [IProduct[], IProduct[]] => {
  let filteredProducts_copy: IProduct[] = [...unfilteredProducts, ...filteredProducts];
  let unfilteredProducts_copy: IProduct[] = [];

  filteredProducts_copy = filteredProducts_copy.filter((product: IProduct): boolean => {
    let terms = searchTerm.split(" ");
    let lowerName = product.name?.toLowerCase();
    let lowerColor = product.color?.toLowerCase();
    let lowerType = product.type?.toLowerCase();
    let counter: number = 0;

    for (let i = 0; i < terms.length; i++) {
      counter = lowerName.indexOf(terms[i]) > -1 || lowerColor.indexOf(terms[i]) > -1 || lowerType.indexOf(terms[i]) > -1 ? counter + 1 : counter;
    }

    let doesMatch = counter === terms.length;
    if (!doesMatch) {
      unfilteredProducts_copy.push(product);
    }

    return doesMatch;
  });

  return [filteredProducts_copy, unfilteredProducts_copy];
};

export default searchProductsByTerm;
