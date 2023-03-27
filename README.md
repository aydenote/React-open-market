<div align='center'>

# ⏱ 안녕하세요, "Re React Open Market" 입니다!

</div>

### 💳  **서비스 이용을 위한 계정**
구매자
- 📧 **ID** : buyer1
- 🔐 **PW** : hodu0910

판매자
- 📧 **ID** : seller1
- 🔐 **PW** : hodu0910


### 🔗 배포 링크 : https://steady-croissant-b686de.netlify.app/

### ⏲ 프로젝트 기간 : 10월 8일 ~ 3월 20일

<br>
<br>

<div align='center'>

# 💡 INTRO

</div>

```
💬 리액트 오픈마켓 서비스는 판매자와 구매자를 구별하여 판매자가 상품을 등록, 판매하며 구매자는 구매하는 서비스입니다.

👨‍👩‍👦‍👦 상품을 판매하려고 한다면 판매자로 로그인하여 상품 정보를 등록 및 수정할 수 있습니다.

📢 판매자가 상품을 구매하는 것은 불가능합니다. 

🙏 오픈마켓에 등록되어 있는 상품을 구매하고자 한다면 상품의 세부사항을 확인한 뒤, 장바구니에 넣어, 상품을 구매할 수 있습니다.
```

<br>

<div align='center'>

# ⚙️ Stack

</div>

```
🔷 Front : React, Styled-Components, Redux, React-Router-dom, React-cookie, Slick-carousel, Axios
🔶 Back  : 제공된 API 사용
```

<br>
<br>
<div align='center'>

# 🎨 Figma

</div>

[![리액트 오픈마켓 피그마 이미지](https://user-images.githubusercontent.com/77476077/198972316-917b0552-fa2f-4bef-a407-f179488c727b.PNG)](https://www.figma.com/file/hEyXyA3SDI69DBnfqYZjt9/%EB%A9%8B%EC%82%AC_%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C%EC%8A%A4%EC%BF%A8_2%EA%B8%B0?node-id=49%3A1747)

<br>
<br>

<div align='center'>

# 🧾 요구사항 명세

</div>

## **[기능]**

```
🔐 로그인 : 판매자, 구매자로 구분하여 로그인. 아이디나 비밀번호가 일치 확인.

🔑 회원가입 : 판매자, 구매자로 구분하여 가입. 아이디 중복 확인.

🌌 상품상세 : 상품 수량 변경, 바로 구매 버튼 클릭 시 결제 페이지로 이동

🛒 장바구니 : 장바구니에서 상품의 수량 수정 및 삭제, 금액 계산

🙋‍♂️ 마이페이지 : 마이페이지를 클릭 시 마이페이지,로그아웃 기능이 있는 드롭다운 박스가 활성화.

💜 주문/결제 페이지 : 필수 항목 입력 시 결제하기 버튼 활성화.
```

<br>

## **[UI Interaction]**

```
🌊 상품 목록 : 목록에서 상품을 클릭하면 상품 상세 페이지로 이동. 상품에는 상품 판매자, 상품명, 가격 구현.

🎨 이미지 슬라이드 : react-slick, slick-carousel 패키지를 설치하여 구현.

🤦‍♂️ 에러 페이지 : 비구현 부분 클릭 시 또는 에러 발생 시 에러 페이지로 연결.

```

<br>
<br>

<div align='center'>

# 🐛 Fix : 개발 이슈

<a href='https://velog.io/@aydenote/%EC%B2%98%EC%9D%8C%EB%B6%80%ED%84%B0-%EB%8B%A4%EC%8B%9C-%EB%B3%B5%EC%8A%B5%ED%95%98%EB%8A%94-Re-React' target='_blank'>
프로젝트 블로그
</a>

</div>

<div align='center'>
  
# 🌱 Folder Tree
  
</div>
<details>
    <summary>⏱ React Open Market</summary>
    <div>

 ```
┣ 📝 README.md
┣ 📝 .gitignore
┣ 📄 package.json
┣ 📄 package.lock.json
┣ 📂 public
┃ ┣ 📝 index.html
┃ ┗ 🎨 reset.css
┣ 📂 src
┃ ┣ 📂 apis
┃ ┃ ┣ 📝 cart.js
┃ ┃ ┣ 📝 login.js
┃ ┃ ┣ 📝 products.js
┃ ┃ ┣ 📝 seller.js
┃ ┃ ┗ 📝 signup.js
┃ ┣ 📂 asset
┃ ┃ ┗ 🎨 이미지 파일들
┃ ┣ 📂 components
┃ ┃ ┣ 📂 button
┃ ┃ ┣ 📂 buy
┃ ┃ ┣ 📂 cart
┃ ┃ ┣ 📂 footer
┃ ┃ ┣ 📂 form
┃ ┃ ┣ 📂 header
┃ ┃ ┣ 📂 login
┃ ┃ ┣ 📂 modal
┃ ┃ ┣ 📂 product
┃ ┃ ┣ 📂 sellerboard
┃ ┃ ┣ 📂 signup
┃ ┃ ┗ 📂 slide
┃ ┣ 📂 views
┃ ┃ ┣ 🧾 AddProductPage.jsx
┃ ┃ ┣ 🧾 BuyPage.jsx
┃ ┃ ┣ 🧾 CartPage.jsx
┃ ┃ ┣ 🧾 LoginPage.jsx
┃ ┃ ┣ 🧾 MainPage.jsx
┃ ┃ ┣ 🧾 ProductDetailPage.jsx
┃ ┃ ┣ 🧾 AddProductPage.jsx
┃ ┃ ┣ 🧾 SellerCenterPage.jsx
┃ ┃ ┗ 🧾 SignUpPage.jsx
┃ ┣ 📂 reducers
┃ ┃ ┣ 🧾 cart.js
┃ ┃ ┣ 🧾 counter.js
┃ ┃ ┣ 🧾 image.js
┃ ┃ ┣ 🧾 index.js
┃ ┃ ┣ 🧾 loginFail.js
┃ ┃ ┣ 🧾 loginType.js
┃ ┃ ┣ 🧾 mainProduct.js
┃ ┃ ┣ 🧾 seller.js 
┃ ┃ ┣ 🧾 signupFail.js 
┃ ┃ ┗ 🧾 signupType.js 
┗ ┣ 📂 util
  ┃ ┗ 🧾 cookie.js
  ┣ 🧾 index.js
  ┗ 🧾 App.js
```

</details>
