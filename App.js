/*
<div id="parent">
   <div is="child">
      <h1>I am h1 tag</h1>
      <h2>I am h1 tag</h2>
    </div>
    <div is="child2">
      <h1>I am h1 tag</h1>
      <h2>I am h1 tag</h2>
    </div>
</div>

*/

// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//     xyz: "abc",
//   },
//   "Hello world from ReactJS"
// );
const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement(
      "div",
      {
        id: "child",
      },
      [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag"),
      ]
    ),
    React.createElement(
      "div",
      {
        id: "child2",
      },
      [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag"),
      ]
    ),
  ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
