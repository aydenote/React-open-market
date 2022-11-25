import HeaderBuyer from "./HeaderBuyer";
import HeaderSeller from "./HeaderSeller";

function HeaderUser({ userType }) {
  return userType === "BUYER" ? <HeaderBuyer /> : <HeaderSeller />;
}
export default HeaderUser;
