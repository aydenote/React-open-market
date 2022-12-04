import { useState } from "react";
import styles from "./styles/AddProductInfo.module.css";

function AddProductInfo() {
  const [imageSrc, setImageSrc] = useState("");

  function encodeFileToBase64(fileBlob) {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  }

  return (
    <main className={styles.container}>
      <section>
        <h2 className={styles.infoTitle}>상품 이미지</h2>
        <input
          className={styles.imgInput}
          type="file"
          id="imgFile"
          accept="image/*"
          onChange={(event) => {
            if (event.target.files[0]) {
              encodeFileToBase64(event.target.files[0]);
            }
          }}
        ></input>
        <label htmlFor="imgFile">
          {imageSrc ? <img className={styles.previewImg} src={imageSrc} alt="" /> : <div className={styles.nonImg} />}
          </label>
      </section>
    </main>
  );
}
export default AddProductInfo;
