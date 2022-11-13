import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, About, Error404 } from "./pages";
import Navbar from "./components/layout/Navbar";
import "./app.css";

const App = () => (
  <Router>
    <div className="flex flex-col h-screen">
      <Navbar title="gitApp" />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;
