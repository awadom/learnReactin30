Quiz 2!

1. What is a React component?
   My answer:
   a reusable function.
   Exempler:

2. What's wrong with this code?

```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

My answer:
component name needs to be pascal case instead of camel case.
Exempler:

3. What's wrong with this code?

```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```

My answer:
in reactdom.render the function name needs to be the function name written as a component <Header />.
Exempler:
