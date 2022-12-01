import ReactDOM from "react-dom";
import "./index.css";

function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="nav-logo" src="logo192.png" alt=""></img>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
function Content() {
  return (
    <div className="content">
      <h1>Why I want to learn React:</h1>
      <ol>
        <li>To increase my development knowledge.</li>
        <li>To build my app.</li>
        <li>For fun!</li>
      </ol>
    </div>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <small>© 2022 Awad development. All rights reserved.</small>
    </footer>
  );
}
function Component() {
  return (
    <body className="component">
      <Header />
      <Content />
      <Footer />
    </body>
  );
}

ReactDOM.render(<Component />, document.getElementById("root"));
