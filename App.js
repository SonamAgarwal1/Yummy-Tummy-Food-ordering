import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "Namaste");
const root = ReactDOM.createRoot(document.getElementById("root"));
const jsxheading = (
  <h1 className="head" tabIndex="5">
    Namaste Jee
  </h1>
);
root.render(jsxheading);
