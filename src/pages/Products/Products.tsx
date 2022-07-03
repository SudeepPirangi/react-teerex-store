import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Col from "rsuite/Col";

import { RootState } from "../../redux/store";
import { setProducts } from "../../redux/productsSlice";
import IProduct from "../../interfaces/IProduct";
import productsService from "../../services/productsService";
import Product from "./Product/Product";

function Products(): JSX.Element {
  const products: IProduct[] = useSelector((state: RootState) => state.filteredProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const productsJSON: IProduct[] = await productsService();
      dispatch(setProducts(productsJSON));
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <>
      {products.length ? (
        products.map((product: IProduct): JSX.Element => {
          return (
            <Col xs={12} sm={12} md={8} lg={6} xl={4} key={product.id}>
              <Product product={product} />
            </Col>
          );
        })
      ) : (
        <span>No products to display</span>
      )}
    </>
  );
}

export default Products;
