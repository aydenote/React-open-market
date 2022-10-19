import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Product.module.css";

function Product() {
  const [loading, setLoading] = useState(true);
  let [productData, setProductData] = useState([]);

  useEffect(() => {
    axios({
      url: "https://openmarket.weniv.co.kr/products",
      method: "get",
    }).then((response) => {
      setProductData(response.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <ul className={styles.productContainer}>
      {productData.results.map((product) => (
        <Link
          to="/productDetail"
          state={{ data: product }}
          key={product.product_id}
        >
          <li className={styles.productList} key={product.product_id}>
            <img
              className={styles.productImg}
              src={product.image}
              alt="상품 이미지"
            />
            <p className={styles.productStoreName}>{product.store_name}</p>
            <p className={styles.productName}>{product.product_name}</p>
            <p className={styles.productPrice}>
              {product.price.toLocaleString()}
            </p>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Product;
