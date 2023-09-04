import React from "react";
import ReactDOM from "react-dom/client";

/*
Header
 -Logo
 -Nav bar
Body
 -Search
 -Resturant container
  -Resturant Cards
Footer
 -Copyright
 -Links
 -Address
 -Contact
*/

const Header = () => {
  return (
    <div className="res-logo">
      <img
        className="img-logo"
        alt="app-logo"
        src="https://play-lh.googleusercontent.com/Zwx3DKQ6Noez3CeivxjC3p9D11QjWsOnNIlClFzj_ihq_lq0trVeBrqxNp3lwwNPsg"
      />
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

const ResturantCard = (props) => {
  return (
    <div className="res-card">
      <img
        alt="food-img"
        className="food-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEqKtD_W2Kh0JualZ-VYp999jTGs1FFSiUFw&usqp=CAU"
      ></img>
      <h3>{props.resName}</h3>
      <h4>{props.cusine}</h4>
      <h4>30 minutes</h4>
      <h5>4.8 stars</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="res-body">
      <div className="search">Search</div>
      <div className="res-container">
        <ResturantCard resName="Dominos" cusine="Pizza" />
        <ResturantCard resName="Mcd" cusine="Burger" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
