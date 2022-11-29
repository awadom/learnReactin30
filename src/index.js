import ReactDOM from "react-dom";
import React from "react";
const page = (
  <div>
    <h1>My awesome website in React</h1>
    <h3>Why I love React</h3>
    <ul>
      <li>It's Compostable</li>
      <li>It's Declarative</li>
      <li>It's a Hireable Skill</li>
      <li>It's Actively Maintained by Skilled People</li>
    </ul>
  </div>
);

ReactDOM.render(page, document.getElementById("root"));
