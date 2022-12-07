import { useState } from "react";
import styles from "./styles/AddProductInfo.module.css";

function AddProductInfo({ setImgFile }) {
  const [imageSrc, setImageSrc] = useState("");

  function encodeFileToBase64(fileBlob) {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    setImgFile(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  }

  return (
    <main className={styles.container}>
      <p className={styles.infoTitle}>상품 이미지</p>
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
      <label htmlFor="imgFile">{imageSrc ? <img className={styles.previewImg} src={imageSrc} alt="" /> : <div className={styles.nonImg} />}</label>
    </main>
  );
}
export default AddProductInfo;
