# ASSESSMENT 2: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. What does CRUD stand for?

  Your answer: Create, Read, Update, Delete

  Researched answer: Create, Read, Update, Delete



2. What are the 5 HTTP verbs?

  Your answer:Retrieve, Place, Add, Read, Remove

  Researched answer:
  
  GET - requests should fetch information, and that’s it; they should have no side-effects, make no modifications to the system, create nothing, and destroy nothing.
  
  A HEAD request is functionally identical to a GET, but instead of returning the response body — so, typically, the HTML content of a page, or the JSON result returned by an API, and so on — only the headers are returned.

  POST request is a statement by the client that a new “subordinate resource” should be created beneath the given URI.

  A PUT request instructs the server to replace a resource. 
  
  DELETE request instructs the server to delete the resource identified by the given URL.

3. When creating a basic (stateless) class component in React, what are the necessary elements needed to render "Hello World" on the page?

  Your answer: You would just need to place "Hello World" between two <h1> tags.

  Researched answer:
  - You would need Node JS installed, and also the a basic index.html file with the following code: 
  
  const Greeting = () => <h1>Hello World today!</h1>;


4. What is JSX?

  Your answer:JSX is a hybridized version of javascript that has different syntax rules when rendered in React.

  Researched answer:
  
  JSX is an XML/HTML-like syntax used by React that extends ECMAScript so that XML/HTML-like text can co-exist with JavaScript/React code. The syntax is intended to be used by preprocessors (i.e., transpilers like Babel) to transform HTML-like text found in JavaScript files into standard JavaScript objects that a JavaScript engine will parse.

  Basically, by using JSX you can write concise HTML/XML-like structures (e.g., DOM like tree structures) in the same file as you write JavaScript code, then Babel will transform these expressions into actual JavaScript code. Unlike the past, instead of putting JavaScript into HTML, JSX allows us to put HTML into JavaScript.


5. What is the difference between React state and props?

  Your answer: React state is the current moment in time of whatever the code is evaluating, where as props is the messenger of the state of the portal to view the state at a certain period of time. State is always in the parent function, where as props are found in the child components. 

  Researched answer:
  
  In a React component, props are variables passed to it by its parent component. State on the other hand is still variables, but directly initialized and managed by the component.


6. STRETCH: What is hoisting in JavaScript?

  Your answer:Not sure.

  Researched answer:
  
  In JavaScript, a variable can be declared after it has been used.

  In other words; a variable can be used before it has been declared.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React lifecycle methods
  - This concept relates to special methods that run:  "mounting" and "unmounting" which is used to free up resources according to the code written. 

- API
-   - a set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application, or other service. It is basically a set of rules and properties that companies can release in order for developers to bettwe be able to interact with their data and pre existing website framework.
-   
- event.preventDefault()
 
The event.preventDefault() method stops the default action of an element from happening.

For example: Prevent a submit button from submitting a form, Prevent a link from following the URL

- DOM events
DOM events are actions that occurs as a result of the user action or as result of state change of the elements of a DOM tree