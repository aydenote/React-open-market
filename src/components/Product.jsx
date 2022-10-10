function Product() {
  return (
    <div className="slider">
      <input type="radio" name="slide" id="slide1" />
      <input type="radio" name="slide" id="slide2" />
      <input type="radio" name="slide" id="slide3" />
      <input type="radio" name="slide" id="slide4" />
      <ul id="imgholder" className="imgs">
        <li>
          <img src="./img/slide1.jpg" />
        </li>
        <li>
          <img src="./img/slide2.jpg" />
        </li>
        <li>
          <img src="./img/slide3.jpg" />
        </li>
        <li>
          <img src="./img/slide4.jpg" />
        </li>
      </ul>
      <div className="bullets">
        <label htmlFor="slide1">&nbsp;</label>
        <label htmlFor="slide2">&nbsp;</label>
        <label htmlFor="slide3">&nbsp;</label>
        <label htmlFor="slide4">&nbsp;</label>
      </div>
    </div>
  );
}

export default Product;
