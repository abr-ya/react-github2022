import "./app.css";

const App = () => (
  <div className="app">
    <h1 className="text-3xl font-bold underline text-blue-600">Hello, React 2022-09 + Tailwind!</h1>
    <button className="btn">Daisy Btn Class</button>
    <h2>ENV test: {process.env.TEST}</h2>
  </div>
);

export default App;
