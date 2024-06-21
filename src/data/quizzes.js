// src/data/quizzes.js

export const quizzes = [
  {
    id: 0,
    title: 'Frontend Development Quiz',
    questions: [
      { question: 'What does CSS stand for?', options: ['Cascading Style Sheets', 'Colorful Style Sheets', 'Creative Style Sheets', 'Computer Style Sheets'], correct: 0 },
      { question: 'Which HTML tag is used to define an internal style sheet?', options: ['<style>', '<css>', '<script>', '<head>'], correct: 0 },
      { question: 'Which property is used to change the background color?', options: ['color', 'bgcolor', 'background-color', 'background'], correct: 2 },
      { question: 'Which HTML attribute is used to define inline styles?', options: ['class', 'style', 'styles', 'font'], correct: 1 },
      { question: 'Which is the correct CSS syntax?', options: ['body {color: black;}', '{body;color:black;}', '{body:color=black;}', 'body:color=black;'], correct: 0 },
      { question: 'Which property is used to change the font of an element?', options: ['font-family', 'font-style', 'font-weight', 'font-size'], correct: 0 },
      { question: 'Which CSS property controls the text size?', options: ['text-size', 'font-size', 'font-style', 'text-style'], correct: 1 },
      { question: 'How do you display hyperlinks without an underline?', options: ['text-decoration: none;', 'underline: none;', 'text-style: no-underline;', 'decoration: no-underline;'], correct: 0 },
      { question: 'How do you make each word in a text start with a capital letter?', options: ['text-transform: capitalize;', 'text-style: capital;', 'transform: capitalize;', 'text-capitalize: on;'], correct: 0 },
      { question: 'How do you select an element with id "demo"?', options: ['#demo', '.demo', 'demo', '*demo'], correct: 0 },
    ],
  },
  {
    id: 1,
    title: 'React Quiz',
    questions: [
      { question: 'What is a key feature of React?', options: ['Two-way data binding', 'Virtual DOM', 'Backend integration', 'Server-side scripting'], correct: 1 },
      { question: 'What is the use of hooks in React?', options: ['Handling lifecycle events', 'Maintaining local state', 'Both of the above', 'None of the above'], correct: 2 },
      { question: 'What is JSX?', options: ['JavaScript XML', 'JavaScript Extension', 'JavaScript Execution', 'JavaScript Example'], correct: 0 },
      { question: 'How do you create a functional component in React?', options: ['function MyComponent() {}', 'class MyComponent extends React.Component {}', 'const MyComponent = () => {}', 'All of the above'], correct: 3 },
      { question: 'What is the purpose of the useState hook?', options: ['To manage component state', 'To manage global state', 'To handle side effects', 'To interact with APIs'], correct: 0 },
      { question: 'What does the useEffect hook do?', options: ['Handles side effects in function components', 'Updates the DOM directly', 'Handles event listeners', 'None of the above'], correct: 0 },
      { question: 'How do you pass props to a component?', options: ['Using attributes in the component tag', 'Using the `this.props` object', 'Both of the above', 'None of the above'], correct: 0 },
      { question: 'What is the role of keys in React lists?', options: ['To uniquely identify list items', 'To handle events', 'To maintain component state', 'To bind data to components'], correct: 0 },
      { question: 'How do you create a React element?', options: ['React.createElement()', 'React.create()', 'React.Component()', 'React.newElement()'], correct: 0 },
      { question: 'What is the use of propTypes?', options: ['To type-check props', 'To manage component state', 'To handle side effects', 'To interact with APIs'], correct: 0 },
    ],
  },
  {
    id: 2,
    title: 'JavaScript Quiz',
    questions: [
      { question: 'Which of the following is a JavaScript data type?', options: ['String', 'Number', 'Boolean', 'All of the above'], correct: 3 },
      { question: 'What is "null" in JavaScript?', options: ['A value that represents no value', 'A variable that has been declared but not assigned a value', 'A string', 'An object'], correct: 0 },
      { question: 'What is the use of the "===" operator?', options: ['To check equality without type coercion', 'To check equality with type coercion', 'To assign a value', 'To concatenate strings'], correct: 0 },
      { question: 'Which method is used to add an element to the end of an array?', options: ['push()', 'pop()', 'shift()', 'unshift()'], correct: 0 },
      { question: 'What is the purpose of the "this" keyword?', options: ['To refer to the current object', 'To refer to a global variable', 'To refer to a local variable', 'None of the above'], correct: 0 },
      { question: 'What is the result of "typeof null"?', options: ['"object"', '"null"', '"undefined"', '"number"'], correct: 0 },
      { question: 'How do you declare a variable in JavaScript?', options: ['var', 'let', 'const', 'All of the above'], correct: 3 },
      { question: 'Which method converts a JSON string to a JavaScript object?', options: ['JSON.parse()', 'JSON.stringify()', 'JSON.toObject()', 'JSON.convert()'], correct: 0 },
      { question: 'What is an IIFE in JavaScript?', options: ['Immediately Invoked Function Expression', 'Initial Interactive Function Execution', 'Infinite Increment Function Expression', 'None of the above'], correct: 0 },
      { question: 'How do you create an object in JavaScript?', options: ['let obj = {}', 'let obj = Object.create()', 'let obj = new Object()', 'All of the above'], correct: 3 },
    ],
  },
 
];


export const getQuizById = (id) => {
  return quizzes.find(quiz => quiz.id === id);
};


export const getQuizFromLocalStorageById = (id) => {
  const savedQuizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
  return savedQuizzes.find(quiz => quiz.id === id);
};


export const getAllQuizzes = () => {
  const savedQuizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
  return [...quizzes, ...savedQuizzes];
};
