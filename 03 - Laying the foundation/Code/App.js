import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled before it reaches to JS engine) - Parcel - Babel

// JSX -> Babel transpiled it to React.createElement -> React Element (JS object) -> HTMLelement(render)


const title2 = (
  <div>
    <h1>Parcel is a beast</h1>
  </div>
)

const Title = () => <h1 id="parent">Namaste React from JSX</h1>;

// React Component

const HeadingComponent = () => (
  <div id="container">

    {title2}
    {Title()}
    <Title/>  
    <Title></Title>
    <h1>React Functional Component</h1>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
