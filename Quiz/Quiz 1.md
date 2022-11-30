1. Why do we need to `import React from "react"` in our files?
   My answer:
   React is a library and needs to be imported into our webapp so we can use its functionality.
   Exempler:
   the JSX syntax is defined in react.

2. If I were to console.log(page) in index.js, what would show up?
   My answer:
   It would display the objects being created to build the page.
   Exempler:
   A javascript Object. React elements that descrive what react should eventually add to the real DOM for us.
3. What's wrong with this code:

```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```

My answer:
Not sure, is it that we are not rendering it?
Exempler:
We need our JSX to be nested under a single parent element. We can create a <div> or a <> fragment to wrap the child elements.

4. What does it mean for something to be "declarative" instead of "imperative"?
   My answer:
   Declarative means we give the computer instruction and it does it by itself, while imperative means that we have to tell the computer to do every step.
   Exempler:
   example: asking a friend to make me a peanut butter and jelly sandwich. Declaratively, "He can you make me a peanut butter and jelly sandwich?" and then they make it. Imperatively, "grab a slice of bread with your finger...etc".

5. What does it mean for something to be "composable"?
   My answer:
   We can turn our functions into components.
   Exempler:
   We have small pieces that we can put together to make something larger/greater than the individual pieces.
