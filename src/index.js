import ReactDOM from "react-dom";

const page = (
  <div>
    <img src="logo192.png" alt="" width="40px" />
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100k stars on Github</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
);
console.log(page);
ReactDOM.render(page, document.getElementById("root"));
