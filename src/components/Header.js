import { LOGO_URL } from "../utils/constant";
const Header = () => {
  return (
    <div className="res-logo">
      <img className="img-logo" alt="app-logo" src={LOGO_URL} />
      <div className="nav-bar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
