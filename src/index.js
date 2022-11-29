import ReactDOM from "react-dom";
import React from "react";
const page = (
  <div>
    <h1>My awesome website in React</h1>
    <h3>Why I love React</h3>
    <ul>
      <li>Its Compostable</li>
      <li>Its declarative</li>
      <li>Its a hireable skill</li>
      <li>Its actively maintained by skilled people</li>
    </ul>
  </div>
);

document.getElementById("root").append(page);
// ReactDOM.render(page, document.getElementById("root"));
