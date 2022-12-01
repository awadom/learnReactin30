import ReactDOM from "react-dom";

function Header() {
  return (
    <header>
      <nav>
        <img src="logo192.png" alt="" width="50px"></img>
      </nav>
    </header>
  );
}
function Content() {
  return (
    <>
      <h1>Why I want to learn React:</h1>
      <ol>
        <li>To increase my development knowledge</li>
        <li>To build my app</li>
        <li>for fun!</li>
      </ol>
    </>
  );
}
function Footer() {
  return (
    <footer>
      <small>c 2022 Awad development. All rights reserved.</small>
    </footer>
  );
}
function Component() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

ReactDOM.render(<Component />, document.getElementById("root"));
