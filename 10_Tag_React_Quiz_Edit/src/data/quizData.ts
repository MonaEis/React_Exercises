const quizzes = [
  {
    topic: "React 19",
    slug: "react",
    logo: "⚛️",
    questions: [
      {
        title: "Which one of these React Hooks does not exist?",
        options: [
          "useEffect",
          "useOptimistic",
          "useSyncExternalStore",
          "usePessimistic",
        ],
        correctOption: "usePessimistic",
      },
      {
        title: "What is the correct way to update state in React?",
        options: [
          "this.state = { count: this.state.count + 1 }",
          "this.setState({ count: this.state.count + 1 })",
          "setState(this.state.count + 1)",
          "this.count = this.state.count + 1",
        ],
        correctOption: "this.setState({ count: this.state.count + 1 })",
      },
      {
        title: "Which method is NOT part of React component lifecycle?",
        options: [
          "componentDidMount",
          "componentWillUpdate",
          "componentDidRender",
          "componentWillUnmount",
        ],
        correctOption: "componentDidRender",
      },
      {
        title: "What is the purpose of React.memo?",
        options: [
          "To memorize component state",
          "To remember user input values",
          "To prevent unnecessary re-renders of functional components",
          "To create memoized selector functions",
        ],
        correctOption:
          "To prevent unnecessary re-renders of functional components",
      },
      {
        title: "What is the correct way to render a list in React?",
        options: [
          "Using a for loop inside the render method",
          "Using Array.map() and providing a key prop",
          "Using document.createElement() for each item",
          "Using the <repeat> element",
        ],
        correctOption: "Using Array.map() and providing a key prop",
      },
      {
        title: "What is the purpose of React's useRef hook?",
        options: [
          "To reference external libraries",
          "To create mutable references that don't cause re-renders",
          "To reference previous state values",
          "To create ref attributes from parent components",
        ],
        correctOption:
          "To create mutable references that don't cause re-renders",
      },
      {
        title: "Which of these is NOT a valid way to create a React component?",
        options: [
          "Function declarations",
          "Arrow functions",
          "Class extending React.Component",
          "Generator functions",
        ],
        correctOption: "Generator functions",
      },
    ],
  },
  {
    topic: "TypeScript 6.0",
    slug: "typescript",
    logo: "🦕",
    questions: [
      {
        title: "What is the primary benefit of using TypeScript?",
        options: [
          "Faster runtime performance",
          "Static typing and improved tooling",
          "Automatic code minification",
          "Simplified CSS styling",
        ],
        correctOption: "Static typing and improved tooling",
      },
      {
        title: "Which keyword is used to define a custom type in TypeScript?",
        options: ["interface", "type", "class", "enum"],
        correctOption: "type",
      },
      {
        title: "What does the 'any' type in TypeScript represent?",
        options: [
          "A type that must be explicitly defined",
          "A type that can hold any value",
          "A type that represents a null or undefined value",
          "A type that represents a boolean value",
        ],
        correctOption: "A type that can hold any value",
      },
      {
        title: "What is the purpose of TypeScript's 'enum'?",
        options: [
          "To define a collection of constants",
          "To create reusable UI components",
          "To define asynchronous operations",
          "To handle events in the DOM",
        ],
        correctOption: "To define a collection of constants",
      },
      {
        title:
          "What is the correct way to define an optional property in an interface?",
        options: [
          "property?",
          "optional property",
          "property: optional",
          "property = null",
        ],
        correctOption: "property?",
      },
      {
        title: "What is a generic in TypeScript?",
        options: [
          "A type that can be used with any value",
          "A function that accepts any type of argument",
          "A way to create reusable components that work over a variety of types",
          "A type representing a general error",
        ],
        correctOption:
          "A way to create reusable components that work over a variety of types",
      },
      {
        title:
          "Which of these is used to compile TypeScript code to JavaScript?",
        options: ["tsc", "ts-node", "ts-run", "ts-build"],
        correctOption: "tsc",
      },
    ],
  },
  {
    topic: "Supabase",
    slug: "supabase",
    logo: "👾",
    questions: [
      {
        title: "What is Supabase primarily used for?",
        options: [
          "Frontend UI development",
          "Backend as a Service (BaaS)",
          "CSS styling",
          "Version control",
        ],
        correctOption: "Backend as a Service (BaaS)",
      },
      {
        title: "Which database does Supabase use under the hood?",
        options: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"],
        correctOption: "PostgreSQL",
      },
      {
        title: "What is the purpose of Supabase's 'Realtime' feature?",
        options: [
          "To provide offline data storage",
          "To enable real-time database updates and subscriptions",
          "To optimize image loading",
          "To handle user authentication",
        ],
        correctOption: "To enable real-time database updates and subscriptions",
      },
      {
        title: "What does Supabase's 'Auth' service provide?",
        options: [
          "Data visualization",
          "User authentication and authorization",
          "Serverless functions",
          "CSS pre-processing",
        ],
        correctOption: "User authentication and authorization",
      },
      {
        title: "Which of the following is NOT a feature of Supabase?",
        options: [
          "Database",
          "Authentication",
          "Storage",
          "Frontend Framework",
        ],
        correctOption: "Frontend Framework",
      },
      {
        title: "How does Supabase handle file storage?",
        options: [
          "Through a built-in NoSQL database",
          "Using a dedicated file storage service",
          "By storing files directly in the PostgreSQL database",
          "By integrating with external cloud storage services",
        ],
        correctOption: "Using a dedicated file storage service",
      },
      {
        title:
          "What is the primary way to interact with Supabase in a client-side application?",
        options: [
          "Direct SQL queries",
          "Using the Supabase JavaScript client library",
          "Through server-side rendering",
          "By using XML requests",
        ],
        correctOption: "Using the Supabase JavaScript client library",
      },
    ],
  },
];

export default quizzes;
