/**
 *
 * <div id = "parent">
 *      <div id = "child">
 *          <h1>I'm an h1 tag</h1>
 *          <h2>I'm an h2 tag</h1>
 *      </div>
 *      <div id = "child2">
 *          <h1>I'm an h1 tag</h1>
 *          <h2>I'm an h2 tag</h1>
 *      </div>
 * </div>
 * 
 * ReactElement -> object ==(browser convert)==> HTML (Browser Understands)
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);  //object

root.render(parent);
