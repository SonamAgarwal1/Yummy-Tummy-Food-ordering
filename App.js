import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "Namaste");

const Jsxheading = () => (
  <h1 className="head" tabIndex="5">
    Namaste Jee
  </h1>
);

//Component compositioning- using one component within another
const HeadingComponent = () => {
  return (
    <div className="heading">
      <Jsxheading />
      <h1>Namaste react functional component</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
