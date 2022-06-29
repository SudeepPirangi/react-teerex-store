import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "rsuite/Button";
import Col from "rsuite/Col";

import { RootState } from "../../Redux/store";
import { setProducts } from "../../Redux/productsSlice";
import IProduct from "../../interfaces/IProduct";
import productsService from "../../services/productsService";
import styles from "./Products.module.css";

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
            <Col xs={24} sm={12} lg={8} xl={6} key={product.id} className={styles.productCard}>
              <div className="productNameImage">
                <span className="productName">{product.name}</span>
                <img className={styles.productImage} src={product.imageURL} alt={product.name} />
              </div>
              <div className="product-details">
                <span className="product-price">{product.price}</span>
                <Button>Add to Cart</Button>
              </div>
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
