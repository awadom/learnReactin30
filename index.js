// const h1 = document.createElement("h1");
// h1.textContent = "Hello, React!";
// h1.className = "header";
// console.log(h1);

//JSX

const page = (
  <div>
    <h1 className="header">This is JSX</h1>
    <p>Paragraph</p>
  </div>
);

console.log(page);

ReactDOM.render(page, document.getElementById("root"));
