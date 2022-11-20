import styles from "./styles/DetailCount.module.css";
import minusImg from "../asset/icon-minus-line.svg";
import plusImg from "../asset/icon-plus-line.svg";

function DetailCount({ setProductCount, productCount }) {
  function clickMinus(event) {
    const count = event.currentTarget.nextSibling.innerText;
    count <= 1 ? setProductCount(1) : setProductCount(productCount - 1);
  }

  function clickPlus() {
    setProductCount(productCount + 1);
  }

  return (
    <>
      <div className={styles.countContainer}>
        <button className={styles.minusBtn} onClick={clickMinus}>
          <img src={minusImg} alt="상품 수량 감소" />
        </button>
        <p className={`${styles.productCount} itemCount`}>{productCount}</p>
        <button className={styles.plusBtn} onClick={clickPlus}>
          <img src={plusImg} alt="상품 수량 증가" />
        </button>
      </div>
    </>
  );
}

export default DetailCount;
