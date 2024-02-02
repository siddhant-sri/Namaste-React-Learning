import React from "react"
import ReactDOM from "react-dom"


const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Namaste React"),
    React.createElement("h2", {}, "From Scrat"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);  //object

root.render(parent);
