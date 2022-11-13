import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, About, Error404 } from "./pages";
import Navbar from "./components/layout/Navbar";
import "./app.css";
import Footer from "./components/layout/Footer";

const App = () => (
  <Router>
    <div className="flex flex-col justify-between h-screen">
      <Navbar title="gitApp" />
      <main className="container mx-auto px-3 pb-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
