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
  //Line 17, 18 and 19 is the same way of calling component inside another component
  return (
    <div className="heading">
      <Jsxheading />
      <Jsxheading></Jsxheading>
      {Jsxheading()}
      <h1>Namaste react functional component</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
