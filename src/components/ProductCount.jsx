import minusImg from "../asset/icon-minus-line.svg";
import plusImg from "../asset/icon-plus-line.svg";
import styles from "./styles/ProductCount.module.css";

function ProductCount(props) {
  function clickMinus(event) {
    console.log(event.target);
    props.setCount(props.getCount - 1);
  }
  function clickPlus(event) {
    console.log(event.target);
    props.setCount(props.getCount + 1);
  }

  return (
    <div className={styles.countContainer}>
      <button className={styles.minusBtn} onClick={clickMinus}>
        <img src={minusImg} alt="상품 수량 감소" />
      </button>
      <p className={styles.productCount}>{props.getCount}</p>
      <button className={styles.plusBtn} onClick={clickPlus}>
        <img src={plusImg} alt="상품 수량 증가" />
      </button>
    </div>
  );
}

export default ProductCount;
